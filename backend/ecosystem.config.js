module.exports = {
  apps: [
    {
      name: 'Beinheilsa',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: 'npm',
      args: 'start',
      watching: true
    }
  ]
}
