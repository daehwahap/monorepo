const SECONDS = 1000
const MINUTES = 1000 * 60
const HOURS = 1000 * 60 * 60
const DAYS = 1000 * 60 * 60 * 24

/** 밀리초 단위의 시간을 나타내는 상수 */
export const TIME = {
  '0.5초': SECONDS / 2,
  '1초': SECONDS,
  '2초': SECONDS * 2,
  '3초': SECONDS * 3,

  '1분': MINUTES,
  '5분': MINUTES * 5,
  '10분': MINUTES * 10,
  '15분': MINUTES * 15,
  '30분': MINUTES * 30,

  '1시간': HOURS,
  '2시간': HOURS * 2,
  '3시간': HOURS * 3,
  '6시간': HOURS * 6,
  '12시간': HOURS * 12,

  '1일': DAYS,
  '2일': DAYS * 2,
  '3일': DAYS * 3,
  '4일': DAYS * 4,
  '5일': DAYS * 5,
  '7일': DAYS * 7,
  '15일': DAYS * 15,
  '30일': DAYS * 30,
} as const
