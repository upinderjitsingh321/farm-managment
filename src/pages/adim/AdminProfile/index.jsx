import { useState } from "react";
import "./style.css"
function AdminProfile() {
    const [name, setName] = useState("John Doe");
    const [email, setEmail] = useState("admin@example.com");
    const [role, setRole] = useState("Super Admin");
    const [password, setPassword] = useState("");

    const handlePasswordChange = () => {
        alert("Password changed successfully!");
    };

    return (
        <div style={{ maxWidth: "900px", margin: "40px auto", padding: "20px", fontFamily: "Arial, sans-serif", backgroundColor: "#f9f9f9", borderRadius: "10px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
            {/* Profile Info */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}>
                <img className="profile-pos" src="" style={{ width: "100px", height: "100px", borderRadius: "50%", border: "2px solid #007bff" }} />
                <input id='image' type='file' className='d-none' />
                <label className='edit-camera-icon1' htmlFor='image'><i class="fa-solid fa-camera fs-5" role='button'></i></label>

                <div>
                    <h2 style={{ margin: 0, fontSize: "24px", color: "#333" }}>{name}</h2>
                    <p style={{ margin: "5px 0", color: "#777" }}>{email}</p>
                    <p style={{ fontSize: "16px", color: "#555" }}>Role: <strong>{role}</strong></p>
                </div>
            </div>

            {/* Account Settings */}
            <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginBottom: "10px", color: "#333" }}>Account Settings</h3>
                <label style={{ fontWeight: "bold", color: "#555" }}>Email:</label>
                <p style={{ backgroundColor: "#f3f3f3", padding: "8px 12px", borderRadius: "5px" }}>{email}</p>
                <div style={{ marginTop: "15px" }}>
                    <label style={{ fontWeight: "bold", color: "#555" }}>New Password</label>
                    <input type="password" placeholder="Enter new password" style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }} />
                </div>
                <div style={{ marginTop: "10px" }}>
                    <label style={{ fontWeight: "bold", color: "#555" }}>Confirm Password</label>
                    <input type="password" placeholder="Confirm new password" style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "5px", border: "1px solid #ccc" }} />
                </div>
                <button className="bg-success" onClick={() => alert("Change Password")} style={{ marginTop: "10px", padding: "10px 15px", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Change Password</button>
            </div>

            {/* Activity Logs */}
            <div style={{ marginTop: "20px", padding: "20px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0px 2px 5px rgba(0,0,0,0.1)" }}>
                <h3 style={{ marginBottom: "10px", color: "#333" }}>Recent Logins</h3>
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr className="bg-success" style={{ color: "white" }}>
                            <th className="recent-table">Date</th>
                            <th className="recent-table">Time</th>
                            <th className="recent-table">IP Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style={{ borderBottom: "1px solid #ddd" }}>
                            <td className="recent-table">2025-03-18</td>
                            <td className="recent-table">14:30</td>
                            <td className="recent-table">192.168.1.1</td>
                        </tr>
                        <tr>
                            <td className="recent-table">2025-03-17</td>
                            <td className="recent-table">09:15</td>
                            <td className="recent-table">192.168.1.2</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Logout */}
            <button className="bg-danger" style={{ marginTop: "20px", padding: "10px", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>
                Logout
            </button>
        </div>
    );
}
export default AdminProfile