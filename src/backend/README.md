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

<h2>DBModels</h2>
<b>User models</b>
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
    todoId: TodoModel
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
    invites: InviteModel[]
    files: FileModel[]
    awards: AwardsModel[]
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
    shoolId: ShoolModel
}

interface TeacherRoleModel {
    id: number
    name: 'Teacher'
    shoolId: ShoolModel
    classId: ClassModel
}

interface LearnerRoleModel {
    id: number
    name: 'Learner'
    shoolId: ShoolModel
    classId: ClassModel
    homeworks: HomeWorksModel[]
    score: ScoreModel[]
}
```
UserModel, AdminRoleModel,
LearnerRoleModel, TeacherRoleModel, DirectorRoleModel,
ManagerRoleModel

<b>Group models</b>
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