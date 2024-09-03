module.exports = {
  apps: [
    {
      name: 'RecruitedV2',
      port: process.env.NUXT_RUN_PORT,
      exec_mode: 'cluster',
      instances: 'max',
      script:  process.env.NUXT_BUILD_PATH + '/server/index.mjs'
    }
  ]
}
