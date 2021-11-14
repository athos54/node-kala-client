
`npm i node-kala-client`

```javascript
// Start client
const client = new Kala('[http|https]://kalaUrl:kalaPort/api/v1')

or 

const client = new Kala() // -> for http://localhost:8000/api/v1

// Delete all jobs
await client.deleteAllJobs()

// Create job
const startDate = new Date()
startDate.setTime(startDate.getTime() + 1000 * 60)
await client.createJob({
    name: 'test',
    times: 10, // -> 0 to repeat forever
    start: startDate.toISOString(), // ej. 2021-11-14T19:52:00+01:00
    interval: 'PT1M',
    command: 'echo hi'
})

// Run job
await client.startJob('0e1a25f8-4c6b-43dd-6b9d-2aed326ef06e')

// Disable job
await client.disableJob('0e1a25f8-4c6b-43dd-6b9d-2aed326ef06e')

// Enable job
await client.enableJob('0e1a25f8-4c6b-43dd-6b9d-2aed326ef06e')

// Get job
const job = await client.getJob('364feaef-a95b-4f88-7b39-57721c09f26b')

// Delete job
await client.deleteJob('364feaef-a95b-4f88-7b39-57721c09f26b')

// Get job
const job = await client.getJob('364feaef-a95b-4f88-7b39-57721c09f26b')

// Get all jobs
const jobs = await client.getJobs()

// Get stats
const stats = await client.getStats()

```