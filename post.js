async function main() {
  console.log('test 1')

  const {DefaultArtifactClient} = require('@actions/artifact')
  
  console.log('test 2')

  const artifact = new DefaultArtifactClient()
  const {id, size} = await artifact.uploadArtifact(
    // name of the artifact
    'my-artifact',
    // files to include (supports absolute and relative paths)
    ['./traces.tar.gz'],
    {
      // optional: how long to retain the artifact
      // if unspecified, defaults to repository/org retention settings (the limit of this value)
      retentionDays: 10
    }
  )
  
  console.log(`Created artifact with id: ${id} (bytes: ${size}`)
}

main();
