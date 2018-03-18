import { csv } from 'd3-request'

export default (csvFile, callback) => {
  // Read CSV and filter some data
  let facebookRaisedData = []
  csv(csvFile, (error, data) => {
    if (error) throw error
    facebookRaisedData = data.filter(record => {
      return record.company === 'Facebook'
    })
    callback(facebookRaisedData)
  })
}
