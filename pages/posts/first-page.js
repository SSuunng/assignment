import Link from 'next/link'
export default function FirstPage() {
    return (
        <div>
            <h1>Name: 박성민   My own code: 2023004584</h1>
            <h2>I have many hobbies</h2>
            <div>
                <ol>
                    <li>Collecting sneakers</li>
                    <li>Watching youtube lying in bed</li>
                    <li>Playing game called 'valrorant'...etc</li>
                </ol>
            </div>
            <Link href="/">홈으로</Link> 
        </div>
    )
}
