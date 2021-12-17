package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgAddCertificateById{}

func NewMsgAddCertificateById(creator string, id string, checksum string, productname string, status string, url string) *MsgAddCertificateById {
	return &MsgAddCertificateById{
		Creator:     creator,
		Id:          id,
		Checksum:    checksum,
		Productname: productname,
		Status:      status,
		Url:         url,
	}
}

func (msg *MsgAddCertificateById) Route() string {
	return RouterKey
}

func (msg *MsgAddCertificateById) Type() string {
	return "AddCertificateById"
}

func (msg *MsgAddCertificateById) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgAddCertificateById) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgAddCertificateById) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
