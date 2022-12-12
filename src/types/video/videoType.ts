export interface VideoTypeResponse {
    _id: string,
    userId: string,
    title: string,
    desc: string,
    imgUrl: string,
    videoUrl: string,
    views: number,
    tags: string[],
    likes: string[],
    dislikes: string[],
    createdAt: Date,
    updatedAt: Date,
    __v: number,
}

export type VideoTypesResponse = VideoTypeResponse[];