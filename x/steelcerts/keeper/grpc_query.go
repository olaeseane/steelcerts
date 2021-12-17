package keeper

import (
	"github.com/sapcis/steelcerts/x/steelcerts/types"
)

var _ types.QueryServer = Keeper{}
