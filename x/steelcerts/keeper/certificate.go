package keeper

import (
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sapcis/steelcerts/x/steelcerts/types"
)

// SetCertificate set a specific certificate in the store from its index
func (k Keeper) SetCertificate(ctx sdk.Context, certificate types.Certificate) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CertificateKeyPrefix))
	b := k.cdc.MustMarshal(&certificate)
	store.Set(types.CertificateKey(
		certificate.Index,
	), b)
}

// GetCertificate returns a certificate from its index
func (k Keeper) GetCertificate(
	ctx sdk.Context,
	index string,

) (val types.Certificate, found bool) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CertificateKeyPrefix))

	b := store.Get(types.CertificateKey(
		index,
	))
	if b == nil {
		return val, false
	}

	k.cdc.MustUnmarshal(b, &val)
	return val, true
}

// RemoveCertificate removes a certificate from the store
func (k Keeper) RemoveCertificate(
	ctx sdk.Context,
	index string,

) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CertificateKeyPrefix))
	store.Delete(types.CertificateKey(
		index,
	))
}

// GetAllCertificate returns all certificate
func (k Keeper) GetAllCertificate(ctx sdk.Context) (list []types.Certificate) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.CertificateKeyPrefix))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Certificate
		k.cdc.MustUnmarshal(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}
