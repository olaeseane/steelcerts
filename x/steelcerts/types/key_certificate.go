package types

import "encoding/binary"

var _ binary.ByteOrder

const (
	// CertificateKeyPrefix is the prefix to retrieve all Certificate
	CertificateKeyPrefix = "Certificate/value/"
)

// CertificateKey returns the store key to retrieve a Certificate from the index fields
func CertificateKey(
	index string,
) []byte {
	var key []byte

	indexBytes := []byte(index)
	key = append(key, indexBytes...)
	key = append(key, []byte("/")...)

	return key
}
