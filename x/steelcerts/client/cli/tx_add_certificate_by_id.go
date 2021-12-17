package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/sapcis/steelcerts/x/steelcerts/types"
)

var _ = strconv.Itoa(0)

func CmdAddCertificateById() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "add-certificate-by-id [id] [checksum] [productname] [status] [url]",
		Short: "Broadcast message add-certificate-by-id",
		Args:  cobra.ExactArgs(5),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argId := args[0]
			argChecksum := args[1]
			argProductname := args[2]
			argStatus := args[3]
			argUrl := args[4]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgAddCertificateById(
				clientCtx.GetFromAddress().String(),
				argId,
				argChecksum,
				argProductname,
				argStatus,
				argUrl,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
