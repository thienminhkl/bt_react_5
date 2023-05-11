import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserTable extends Component {
    render() {
        const { studentsArr, findStudentsArr } = this.props;
        let showArr = [];

        if (findStudentsArr.length !== 0) {
            showArr = findStudentsArr
        } else {
            showArr = studentsArr
        }
        
        const handleEditStudent = (item) => {
            const action = {
                type: 'EDIT_STUDENT',
                payload: item
            }
            this.props.dispatch(action)
            document.getElementById('id').disabled = true;
            document.getElementById('add').style.display = 'none';
            document.getElementById('update').style.display = 'block';
        }

        const handleDeleteStudent = (item) => {
            const action = {
                type: 'DELETE_STUDENT',
                payload: item.id
            }
            this.props.dispatch(action)
        }

        return (
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr className='bg-dark text-white text-center'>
                            <th>Mã SV</th>
                            <th>Họ Tên</th>
                            <th>SĐT</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {showArr.map((item) =>
                            <tr key={item.id} className='text-center'>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td >
                                    <button
                                        className="btn btn-success"
                                        onClick={() => handleEditStudent(item)}
                                        style={{ width: 70 }}
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        className="btn btn-danger mx-3"
                                        onClick={() => handleDeleteStudent(item)}
                                        style={{ width: 70 }}
                                    >
                                        Xóa
                                    </button>

                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        studentsArr: state.StudentsReducer.studentsArr,
        findStudentsArr: state.StudentsReducer.findStudentsArr,

    }
}


export default connect(mapStateToProps)(UserTable)
