export default async function ListId({params}: {params: Promise<{ id: string}>}) {
    const { id } = await params

    return <p>Lista {id}</p>
}