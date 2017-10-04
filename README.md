# count them days

> 2kb calendar

## why

i am not satisfied with moment.js + jquery combo to have a simple date picker

## goals

- separate calendar logic from ui
- minimal size
- modern – use ES modules for delivery
- simple to use

## inspirations

- macOS calendar
- AirBnb DateRangePicker

## usage

See test/index.html file

```html
<script type="module">
  import { calendarMonth } from 'https://unpkg.com/cntdys@latest/dist/main.min.js' // minified or https://unpkg.com/cntdys for non-minified build
  console.log('calendarMonth', calendarMonth(2017, 9))

  // or with different start of the week
  console.log('calendarMonth', calendarMonth(2017, 9, 0)) // start week on Sunday - TODO: change default?
</script>
```

or with `npm install cntdys`.
