import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/Header";
import Layout from "../../layout";
import './Terms.css'
import { Text } from "./Text";

export default function Terms() {
  return (
    <>
      <Header />
      <Layout>
        <main className="terms">
          <h1 className="terms-title">Términos y condiciones</h1>
          <div className="terms-description">
            <div>
              <Text />
            </div>
          </div>
          <h6 className="terms-dateUpdated">Última actualización: Junio 22, 2021</h6>
        </main>
      </Layout>
      <Footer />
    </>
  )
}
