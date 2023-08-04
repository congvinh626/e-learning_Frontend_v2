export interface UserLogin {
    username: string ,
    password : string
}




export interface UserReponse {
    listRole: [],
    access_token : string,
    expires_in: number,
    refreshToken : string,
    refreshTokenExpiryTime: string,
    errorCode: string,
    message: string,
    userId :string
}
