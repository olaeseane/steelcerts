package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sapcis/steelcerts/x/steelcerts/types"
)

func (k msgServer) AddCertificateById(goCtx context.Context, msg *types.MsgAddCertificateById) (*types.MsgAddCertificateByIdResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, isFound := k.GetCertificate(ctx, msg.GetId())
	if isFound {
		return nil, sdkerrors.Wrap(types.ErrRecordIsExist, "The certificate already exists")
	}
	// creatorAddr, err := sdk.AccAddressFromBech32(msg.GetCreator())
	// if err != nil {
	// 	return nil, sdkerrors.Wrap(types.ErrGetCreator, "Get creator error") 
	// }
	newCert := types.Certificate{
		Index:       msg.GetId(),
		Companycode: msg.GetCreator(), // TODO: Define name of wallet holder
		Productname: msg.GetProductname(),
		Status:      msg.GetStatus(),
		Url:         msg.GetUrl(),
		Checkcsum:   msg.GetChecksum(),
	}
	k.SetCertificate(ctx, newCert)
	return &types.MsgAddCertificateByIdResponse{}, nil
}
