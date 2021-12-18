package types

// DONTCOVER

import (
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

// x/steelcerts module sentinel errors
var (
	// ErrSample = sdkerrors.Register(ModuleName, 1100, "sample error")
	ErrRecordIsExist = sdkerrors.Register(ModuleName, 1100, "The certificate already exists")
	ErrGetCreator    = sdkerrors.Register(ModuleName, 1101, "Get creator error")
)
