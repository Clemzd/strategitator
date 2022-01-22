export class DateUtils {
  public static addSeconds(date: Date, seconds: number): Date {
    return new Date(date.getTime() + seconds * 1000);
  }

  public static getDifferenceInSeconds(startDate: Date, endDate: Date): number {
    return (startDate.getTime() - endDate.getTime()) / 1000;
  }
}
