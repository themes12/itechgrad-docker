import dayjs from 'dayjs';
import BuddhistEra from 'dayjs/plugin/buddhistEra'

const dayjsExt = dayjs;
dayjs.extend(BuddhistEra)

export { dayjsExt };