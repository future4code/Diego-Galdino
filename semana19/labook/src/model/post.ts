enum POST_TYPES {
    NORMAL = "normal",
    EVENT = "event"
}
export class Post {

    constructor(
        public id: string,
        private photo: string,
        private description: string,
        private type: POST_TYPES,
        private authorId: string
    ) { }

    getId(): string { return this.id }
    getPhoto(): string { return this.photo }
    getDescription(): string { return this.description }
    getType(): POST_TYPES { return this.type }
    getAuthorId(): string { return this.authorId }

    setPhoto(photo: string): void { this.photo = photo }
    setDescription(description: string): void { this.description = description }
    setType(type: POST_TYPES): void { this.type = type }
    setAuthorId(authorId: string): void { this.authorId = authorId }
}
export interface createPostInputDTO {
    photo: string,
    description: string,
    type: POST_TYPES,
    token:string
}