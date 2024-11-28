import Hello from '@/components/Hello';

export default function Home() {
    console.log('What am I? --SERVER/CLIENT');

    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
            <h1 className="text-xl text-emerald-600">
                Welcome to the Next.js 15 Crash course
            </h1>

            <Hello />
        </div>
    );
}
