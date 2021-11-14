const axios = require('axios')

class Kala {
    constructor(url = 'http://localhost:8000/api/v1') {
        this.url = url;
    }

    async getJobs() {
        console.log('this.url', this.url)
        const res = await axios.get(`${this.url}/job/`)
        return res.data
    }

    async deleteAllJobs() {
        const res = await axios.delete(`${this.url}/job/all/`)
        return res.data
    }

    async createJob(jobData) {
        if (jobData.name === undefined || jobData.command === undefined || jobData.times === undefined || jobData.start === undefined || jobData.interval === undefined) {
            throw Error('Missing data')
        }

        const res = await axios.post(`${this.url}/job/`, jobData)
        return res.data
    }

    async getJob(jobId) {
        if (jobId === undefined) {
            throw Error('Missing data')
        }

        const res = await axios.get(`${this.url}/job/${jobId}/`)
        return res.data
    }

    async deleteJob(jobId) {
        if (jobId === undefined) {
            throw Error('Missing data')
        }

        const res = await axios.delete(`${this.url}/job/${jobId}/`)
        return res.data
    }

    async getJobStats(jobId) {
        if (jobId === undefined) {
            throw Error('Missing data')
        }

        const res = await axios.get(`${this.url}/job/stats/${jobId}/`)
        return res.data
    }

    async startJob(jobId) {
        if (jobId === undefined) {
            throw Error('Missing data')
        }

        const res = await axios.post(`${this.url}/job/start/${jobId}/`)
        return res.data
    }

    async enableJob(jobId) {
        if (jobId === undefined) {
            throw Error('Missing data')
        }

        const res = await axios.post(`${this.url}/job/enable/${jobId}/`)
        return res.data
    }

    async disableJob(jobId) {
        if (jobId === undefined) {
            throw Error('Missing data')
        }

        const res = await axios.post(`${this.url}/job/disable/${jobId}/`)
        return res.data
    }

    async getStats() {
        console.log('`${this.url}/stats/`', `${this.url}/stats/`);
        const res = await axios.get(`${this.url}/stats/`)
        return res.data
    }

}

module.exports = Kala