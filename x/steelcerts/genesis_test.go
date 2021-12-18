package steelcerts_test

import (
	"testing"

	keepertest "github.com/sapcis/steelcerts/testutil/keeper"
	"github.com/sapcis/steelcerts/x/steelcerts"
	"github.com/sapcis/steelcerts/x/steelcerts/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		CertificateList: []types.Certificate{
			{
				Index: "0",
			},
			{
				Index: "1",
			},
		},
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.SteelcertsKeeper(t)
	steelcerts.InitGenesis(ctx, *k, genesisState)
	got := steelcerts.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	require.Len(t, got.CertificateList, len(genesisState.CertificateList))
	require.Subset(t, genesisState.CertificateList, got.CertificateList)
	// this line is used by starport scaffolding # genesis/test/assert
}
