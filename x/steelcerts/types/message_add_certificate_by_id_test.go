package types

import (
	"testing"

	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/sapcis/steelcerts/testutil/sample"
	"github.com/stretchr/testify/require"
)

func TestMsgAddCertificateById_ValidateBasic(t *testing.T) {
	tests := []struct {
		name string
		msg  MsgAddCertificateById
		err  error
	}{
		{
			name: "invalid address",
			msg: MsgAddCertificateById{
				Creator: "invalid_address",
			},
			err: sdkerrors.ErrInvalidAddress,
		}, {
			name: "valid address",
			msg: MsgAddCertificateById{
				Creator: sample.AccAddress(),
			},
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			err := tt.msg.ValidateBasic()
			if tt.err != nil {
				require.ErrorIs(t, err, tt.err)
				return
			}
			require.NoError(t, err)
		})
	}
}
