import PageShell from '../components/PageShell.jsx'

function LoginPage({ activeRoute, routes, onNavigate }) {
  return (
    <PageShell
      activeRoute={activeRoute}
      routes={routes}
      onNavigate={onNavigate}
    >
      <section className="login-page" aria-labelledby="login-title">
        <div className="login-card">
          <p className="eyebrow">סביבת עבודה ללקוחות</p>
          <h2 id="login-title">כניסה</h2>
          <p className="login-note">
            זהו מסך חזותי בלבד בשלב הזה. השדות עדיין לא מחוברים לפעולה אמיתית.
          </p>

          <div className="field-stack">
            <label>
              אימייל או שם משתמש
              <input type="text" placeholder="הקלד אימייל או שם משתמש" />
            </label>

            <label>
              סיסמה
              <input type="text" placeholder="הקלד סיסמה" />
            </label>
          </div>
        </div>
      </section>
    </PageShell>
  )
}

export default LoginPage
