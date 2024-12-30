async function main() {
  console.log('test 1')

  const {DefaultArtifactClient} = require('@actions/artifact')
  
  console.log('test 2')

  const artifact = new DefaultArtifactClient()
  const {id, size} = await artifact.uploadArtifact(
    // name of the artifact
    'traces',
    // files to include (supports absolute and relative paths)
    ['./traces.tar.gz'],
    '/'
  )
  
  console.log(`Created artifact with id: ${id} (bytes: ${size}`)
}

main();
