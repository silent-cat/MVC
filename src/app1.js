import $ from 'jquery'
import './app1.css'

const $number = $('.number')
const $add = $('.add')
const $minus = $('.minus')
const $mul = $('.mul')
const $divide = $('.divide')

let n = localStorage.getItem('n')
$number.text(n || 100)

$add.on('click', () => {
  let n = parseInt($number.text())
  n += 1
  localStorage.setItem('n', n)
  $number.text(n)
})
$minus.on('click', () => {
  let n = parseInt($number.text())
  n -= 1
  localStorage.setItem('n', n)
  $number.text(n)
})
$mul.on('click', () => {
  let n = parseInt($number.text())
  n *= 2
  localStorage.setItem('n', n)
  $number.text(n)
})
$divide.on('click', () => {
  let n = parseInt($number.text())
  n /= 2
  localStorage.setItem('n', n)
  $number.text(n)
})