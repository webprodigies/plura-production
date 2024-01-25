import { createNextRouteHandler } from 'uploadthing/next'

import { ourFileRouter } from './core'

export const { GET, POST } = createNextRouteHandler({ router: ourFileRouter })

