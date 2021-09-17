var weather = require('weather-js')

// Options:
// search:     location name or zipcode
// degreeType: F or C




client.commands.on('weather', (bot, msg, args) => {
  // console.log(bot, 'msg', args)
  weather.find({ search: '188532', degreeType: 'C' }, function (err, result) {
    if (err) console.log(err)
    const data = result[0]
    //console.log(JSON.stringify(result, null, 2))
    const message = ` 
      Погода в ${data.location.name} \n
      Сейчас ${data.current.temperature > 0 ? '+' : '-'}${data.current.temperature}, ${data.current.skytext} C \f
      Чувствуется как ${data.current.feelslike > 0 ? '+' : '-'}${data.current.feelslike} C \f
      Влажность: ${data.current.humidity} \f
      Скорость ветра: ${data.current.windspeed}
    `
    msg.chat.send(message)
  })
  
})