
export class Show {

    constructor(
        public id: string,
        private weekDay: string,
        private startTime: number,
        private endTime: number,
        private bandId: string
    ) { }

    getId(): string { return this.id }
    getWeekDay(): string { return this.weekDay }
    getStartTime(): number { return this.startTime }
    getEndTime(): number { return this.endTime }
    getBandId(): string { return this.bandId }

    setWeekDay(weekDay: string): void { this.weekDay = weekDay }
    setStartTime(startTime: number): void { this.startTime = startTime }
    setEndTime(endTime: number): void { this.endTime = endTime }
    setBandId(bandId: string): void { this.bandId = bandId }
}
export interface createShowInputDTO {
    weekDay: string,
    startTime: number,
    endTime: number,
    bandId: string,
    token:string
}