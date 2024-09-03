module.exports = {
  apps: [
    {
      name: 'RecruitedV2',
      port: 3000,
      exec_mode: 'cluster',
      instances: 'max',
      script: './dist/qa/server/index.mjs'
    }
  ]
}
