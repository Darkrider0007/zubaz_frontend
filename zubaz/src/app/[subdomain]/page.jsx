export async function generateStaticParams() {
  const subdomains = ["sub1", "sub2", "sub3"]; // Replace with your subdomains or fetch from an API

  return subdomains.map((subdomain) => ({
    subdomain,
  }));
}

export default function SubdomainPage({ params }) {
  const { subdomain } = params;
  return (
    <div>
      <h1>Subdomain: {subdomain}</h1>
      <p>Content for {subdomain}.yourdomain.com</p>
    </div>
  );
}
