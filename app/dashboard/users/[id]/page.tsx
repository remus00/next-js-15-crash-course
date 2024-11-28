interface Props {
    params: {
        id: number;
    };
}

const SingleUserPage = ({ params }: Props) => {
    return (
        <div className="flex h-screen w-full flex-col items-center justify-center gap-4">
            <h1 className="text-xl text-emerald-600">Welcome to the single User page</h1>
            <h2 className="text-lg text-pink-200">This user Id&apos;s {params.id} </h2>
        </div>
    );
};

export default SingleUserPage;
