import React from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

const LoaderElement = () => {
  return(
    <div>
      <Dimmer active>
        <Loader active inline='centered' size='medium'>Loading</Loader>
      </Dimmer>
    </div>
  )
}

export default LoaderElement