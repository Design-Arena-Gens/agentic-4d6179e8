export default function Page() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '2rem',
      gap: '1rem',
      fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'
    }}>
      <h1 style={{ margin: 0, fontSize: '2rem' }}>Voici une image d'un lion</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg"
        alt="Un lion majestueux dans la savane"
        style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}
      />
    </main>
  );
}
