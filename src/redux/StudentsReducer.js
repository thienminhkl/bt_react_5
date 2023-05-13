const stateDefault = {
    studentsArr: [
        // { id: '1', name: 'trinh', phone: '0848778009', email: 'test@gmail.com' },
        // { id: '2', name: 'hinh', phone: '0848778009', email: 'test@gmail.com' },
        // { id: '3', name: 'minh', phone: '0848778009', email: 'test@gmail.com' },
        // { id: '4', name: 'long', phone: '0848778009', email: 'test@gmail.com' },
        // { id: '5', name: 'nhan', phone: '0848778009', email: 'test@gmail.com' },
        // { id: '6', name: 'kim', phone: '0848778009', email: 'test@gmail.com' },
    ],
    studentsEdit: {},
    keyWord: '',
    findStudentsArr: []
}

const StudentsReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_STUDENT': {
            state.studentsArr = [...state.studentsArr, action.payload]

            return { ...state }
        }
        case 'DELETE_STUDENT': {
            const studentsArrUpdate = state.studentsArr.filter(sv => sv.id !== action.payload)
            state.studentsArr = studentsArrUpdate
            state.studentsEdit = {}

            return { ...state }
        }
        case 'EDIT_STUDENT': {
            state.studentsEdit = action.payload


            return { ...state }
        }
        case 'UPDATE_STUDENT': {
            let index = state.studentsArr.findIndex(user => user.id === action.payload.id)
            let newStudentArr = [...state.studentsArr]
            if (index !== -1) {
                newStudentArr[index] = action.payload
            }
            state.studentsArr = newStudentArr
            state.studentsEdit = {}


            return { ...state }
        }
        case 'FIND_STUDENT': {
            let filteredStudents = []
            state.keyWord = action.payload.toLowerCase();
            filteredStudents = state.studentsArr.filter(student => {
                return student.name.toLowerCase().includes(state.keyWord);
            });
            state.findStudentsArr = filteredStudents
            return { ...state };
        }
        default:
            return state
    }


}

export default StudentsReducer