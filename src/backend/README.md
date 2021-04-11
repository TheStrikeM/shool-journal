#Backend web application with microservice architecture
Name: online-journal

<h2>Info</h2>
```typescript
Language: NodeJS
Framework: NestJS
Microservices: gRPC, Redis
Database: Postgresql
Orm: TypeOrm
```

<h2>Database models</h2>
<b>User</b>
```typescript
interface UserModel {
    id: number
    roleId: AdminRoleModel | ManagerRoleModel | DirectorRoleModel | TeacherRoleModel | LearnerRoleModel
    login: string
    password: string
    language: string
    online: boolean
    lastOnline: Date
    timeZone: string
    rating: number
    statuse: string
    personal: {
        fullname: {
            value: string
            access: string
        },
        username: {
            value: string
            access: string
        },
        avatar: {
            value: string
            access: string
        }
        age: {
            value: number
            access: string
        },
        birthDate: {
            value: Date
            access: string
        },
        desc: {
            value: string
            access: string
        }
    }
    contact: {
        mobilePhone: {
            value: number
            access: string
        },
        homePhone: {
            value: number
            access: string
        },
        jobPhone: {
            value: number
            access: string
        },
        email: {
            value: string,
            access: string
        },
        socialNetworks: {
            telegram: {
                value: string
                access: string
            },
            vkontakte: {
                value: string
                access: string
            }
        },
        site: {
            value: string,
            access: string
        }
    }
    private: {
        type: string,
        profile: string,
        contactsValues: string,
        friendsList: string,
        folksList: string,
        filesList: string,
        blog: string,
        groupsList: string,
        eventsList: string,
        wall: string,
        online: string,
    }
    joinList: JoinModel[]
    notifications: NotificationModel[]
    friends: UserModel[]
    blog: BlogPostModel[]
    groupInvites: GroupInviteModel[]
    friendInvites: FriendInviteModel[]
    files: FileModel[]
    rewards: RewardsModel[]
    groups: GroupModel[]
}

interface AdminRoleModel {
    id: number
    name: 'Admin'
    globalPosts: GlobalPostModel[]
}

interface ManagerRoleModel {
    id: number
    name: 'Manager'
}

interface DirectorRoleModel {
    id: number
    name: 'Director'
    shoolId: SchoolModel
}

interface TeacherRoleModel {
    id: number
    name: 'Teacher'
    plane: string
    lesson: string
    shoolId: SchoolModel
    classId?: ClassModel
}

interface LearnerRoleModel {
    id: number
    name: 'Learner'
    isLeader: boolean
    shoolId: SchoolModel
    classId: ClassModel
    homeworks: HomeWorksModel[]
    score: ScoreModel[]
}
```
UserModel, AdminRoleModel,
LearnerRoleModel, TeacherRoleModel, DirectorRoleModel,
ManagerRoleModel

<b>Group</b>
```typescript
interface GroupModel {
    id: number
    title: string
    desc: string
    createdAt: Date
    categoryId: CategoryGroupModel
    owners: UserModel[]
    moders: UserModel[]
    members: UserModel[]
    notifications: GroupNotificationModel[]
    private: {
        groupMembers: string
        file: string
        wall: string
    }
}

interface CategoryGroupModel {
    id: number
    type: string
}
```
GroupModel, CategoryGroupModel

<b>Notifications</b>
```typescript
interface NotificationModel {
    id: number
    recipientId: UserModel 
    title: string
    desc: string
}
```
NotificationModel

<b>Invites</b>
```typescript
interface FriendInviteModel {
    id: number
    senderId: UserModel
    recipientId: UserModel
    confirmed: boolean
}

interface GroupInviteModel {
    id: number
    groupId: GroupModel
    recipientId: UserModel
    confirmed: boolean
}
```
FriendInviteModel, GroupInviteModel

<b>Rewards</b>
```typescript
interface RewardsModel {
    id: number
    title: string
    desc: string
    avatar: string
    members: UserModel[]
}
```

<b>JoinList</b>
```typescript
interface JoinModel {
    id: number
    userId: UserModel
    date: Date
    status: boolean
    adress: string
}
```

<b>School</b>
```typescript
interface SchoolModel {
    id: number
    name: string
    rating: number
    avatar: string
    posts: SchoolPostModel[]
    classes: ClassModel[]
    contact: {
        phone: string
        adress: string
    }
    directorId: UserModel
    teachers: UserModel[]
    learners: UserModel[]
    registredAt: Date
    createdAt: Date
}

interface SchoolPostModel {
    id: number
    schoolId: SchoolModel
    text: string
    createAt: Date
    authorId: UserModel
}
```

<b>Class</b>
```typescript
interface ClassModel {
    id: number
    headId: UserModel
    leaderId: UserModel
    posts: ClassPostModel[]
}

interface ClassPostModel {
    id: number
    classId: ClassModel
    text: string
    createAt: Date
    authorId: UserModel
}
```