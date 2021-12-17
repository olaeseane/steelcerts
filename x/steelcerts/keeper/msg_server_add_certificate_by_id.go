package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/sapcis/steelcerts/x/steelcerts/types"
)

func (k msgServer) AddCertificateById(goCtx context.Context, msg *types.MsgAddCertificateById) (*types.MsgAddCertificateByIdResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgAddCertificateByIdResponse{}, nil
}
