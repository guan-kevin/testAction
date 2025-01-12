async function main() {
  const {DefaultArtifactClient} = require('@actions/artifact')
  const artifact = new DefaultArtifactClient()
  const {id, size} = await artifact.uploadArtifact(
    // name of the artifact
    'traces',
    // files to include (supports absolute and relative paths)
    ['./traces.tar.gz'],
    '.'
  )
}

main();
