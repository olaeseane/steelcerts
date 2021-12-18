package keeper_test

import (
	"strconv"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/sapcis/steelcerts/testutil/keeper"
	"github.com/sapcis/steelcerts/x/steelcerts/keeper"
	"github.com/sapcis/steelcerts/x/steelcerts/types"
	"github.com/stretchr/testify/require"
)

// Prevent strconv unused error
var _ = strconv.IntSize

func createNCertificate(keeper *keeper.Keeper, ctx sdk.Context, n int) []types.Certificate {
	items := make([]types.Certificate, n)
	for i := range items {
		items[i].Index = strconv.Itoa(i)

		keeper.SetCertificate(ctx, items[i])
	}
	return items
}

func TestCertificateGet(t *testing.T) {
	keeper, ctx := keepertest.SteelcertsKeeper(t)
	items := createNCertificate(keeper, ctx, 10)
	for _, item := range items {
		rst, found := keeper.GetCertificate(ctx,
			item.Index,
		)
		require.True(t, found)
		require.Equal(t, item, rst)
	}
}
func TestCertificateRemove(t *testing.T) {
	keeper, ctx := keepertest.SteelcertsKeeper(t)
	items := createNCertificate(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveCertificate(ctx,
			item.Index,
		)
		_, found := keeper.GetCertificate(ctx,
			item.Index,
		)
		require.False(t, found)
	}
}

func TestCertificateGetAll(t *testing.T) {
	keeper, ctx := keepertest.SteelcertsKeeper(t)
	items := createNCertificate(keeper, ctx, 10)
	require.ElementsMatch(t, items, keeper.GetAllCertificate(ctx))
}
