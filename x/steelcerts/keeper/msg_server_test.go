package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/sapcis/steelcerts/testutil/keeper"
	"github.com/sapcis/steelcerts/x/steelcerts/keeper"
	"github.com/sapcis/steelcerts/x/steelcerts/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.SteelcertsKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
