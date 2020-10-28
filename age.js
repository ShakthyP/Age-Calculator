const handleClick = () => {
  const bday = parseInt(document.getElementById('day').value)
  const bmon = document.getElementById('month').value
  const byear = parseInt(document.getElementById('year').value) 
  const date = new Date(Date.now())
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const mons = [
    '01','02','03','04','05','06','07','08','09','10','11','12'
  ]
  const bmonth = parseInt(bmon) < 13 ? parseInt(bmon) - 1 : mons.indexOf(bmon) > -1 ? mons.indexOf(bmon) % 12 : 'not found'

  const d = new Date(byear, bmonth, bday)
  const diff= new Date(Date.now() - d.getTime())
  const days = (diff.getDate() -1)
  const months = diff.getMonth()
  const years = (diff.getFullYear() - 1970)

  document.getElementById('result').innerHTML =

    days >= 0 && months >= 0 && years >= 0 
      
    ?

    'Your age is: ' + days + (days === 1 ? ' day, ' : ' days, ')
    + months + (months === 1 ? ' month, ' : ' months, ')
    + years + ' years'

    :

    'invalid date'
	
}

document.getElementById('submit').addEventListener('click', handleClick)


