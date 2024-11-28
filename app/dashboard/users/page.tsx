'use client';
import { useRouter } from 'next/navigation';

const UsersPage = () => {
    const router = useRouter();
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
            <h1 className="text-xl text-emerald-600">Welcome to the Users page</h1>
            <ul className="mt-10 flex flex-col gap-1">
                <li
                    className="cursor-pointer hover:underline"
                    onClick={() => router.push(`/dashboard/users/${1}`)}
                >
                    User 1
                </li>
                <li
                    className="cursor-pointer hover:underline"
                    onClick={() => router.push(`/dashboard/users/${2}`)}
                >
                    User 2
                </li>
                <li
                    className="cursor-pointer hover:underline"
                    onClick={() => router.push(`/dashboard/users/${3}`)}
                >
                    User 3
                </li>
                <li
                    className="cursor-pointer hover:underline"
                    onClick={() => router.push(`/dashboard/users/${4}`)}
                >
                    User 4
                </li>
            </ul>
        </div>
    );
};

export default UsersPage;
