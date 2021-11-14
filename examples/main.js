const Kala = require('../lib/client')

async function main() {
    // Start client
    // const client = new Kala('[http|https]://kalaUrl:kalaPort/api/v1')
    // const client = new Kala() // -> for http://localhost:8000/api/v1

    // Delete all jobs
    // await client.deleteAllJobs()

    // Create job
    // const startDate = new Date()
    // startDate.setTime(startDate.getTime() + 1000 * 60) // -> add at least a little time for first run
    // await client.createJob({
    //     name: 'test',
    //     times: 5,
    //     start: startDate.toISOString(),
    //     interval: 'PT10S',
    //     command: 'echo hi'
    // })

    // Run job
    // await client.startJob('0e1a25f8-4c6b-43dd-6b9d-2aed326ef06e')

    // Disable job
    // await client.disableJob('0e1a25f8-4c6b-43dd-6b9d-2aed326ef06e')

    // Enable job
    // await client.enableJob('0e1a25f8-4c6b-43dd-6b9d-2aed326ef06e')

    // Get job
    // const job = await client.getJob('364feaef-a95b-4f88-7b39-57721c09f26b')

    // Delete job
    // await client.deleteJob('364feaef-a95b-4f88-7b39-57721c09f26b')

    // Get job
    // const job = await client.getJob('364feaef-a95b-4f88-7b39-57721c09f26b')

    // Get all jobs
    // const jobs = await client.getJobs()

    // Get stats
    // const stats = await client.getStats()

}

main()