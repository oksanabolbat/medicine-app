export default async function Page({ params }) {
    return (
        <div className="py-24 text-center font-semibold">
            <p>Thank you! Your order has been placed ({params.slug})</p>
        </div>
    );
}
