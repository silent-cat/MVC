import $ from 'jquery'
import './app2.css'

const $tabBar = $('.tab-bar')
const $tabContent = $('.tab-content')

$tabBar.on('click', 'li', (e) => {
  const $li = $(e.currentTarget)
  $li.addClass('selected').siblings().removeClass('selected')

  const $index = $li.index()
  console.log($index)

  $tabContent.children().eq($index).addClass('active').siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click')
