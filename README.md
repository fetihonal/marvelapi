

## Demo

https://marvelapicase.herokuapp.com/
# Marvel Api Case

Bu projenin case olarak yapılmıştır.


## Kullanılan Teknolojiler

**İstemci:** React

**Sunucu:** Node

  
## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/fetihonal/marvelapi.git
```

Proje dizinine gidin

```bash
  cd my-project
```

Gerekli paketleri yükleyin

```bash
  npm install
```

Sunucuyu çalıştırın

```bash
  npm run start
```

  
## Dağıtım

Bu projeyi dağıtmak için çalıştırın

```bash
  npm run build
```

  
## Testler

Testleri çalıştırmak için aşağıdaki komutu çalıştırın

```bash
  npm run test
```

  
## API Kullanımı

#### Tüm Karakterleri Getir

```http
  GET GET /v1/public/characters
```

| Parametre | Tip     | Açıklama                |
| :-------- | :------- | :------------------------- |
| `apiKey` | `string` | **Gerekli**. API anahtarınız. |
| `hash` | `string` | **Gerekli**. API anahtarınız. |
| `offset` | `number` | İtem Sayısı |
| `orderBy` | `string` | Sıralama |
| `limit` | `string` | İtem Sayısı Sınırı |

#### Karakter Detayı Getir

```http
  GET /api/items/${id}?ts=1
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Gerekli**. Çağrılacak öğenin anahtar değeri |
| `apiKey` | `string` | **Gerekli**. API anahtarınız. |
| `hash` | `string` | **Gerekli**. API anahtarınız. |

#### Karaktere Ait Çizgi Romanları  Getir

```http
  GET /api/items/${id}/comics
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Gerekli**. Çağrılacak öğenin anahtar değeri |
| `apiKey` | `string` | **Gerekli**. API anahtarınız. |
| `hash` | `string` | **Gerekli**. API anahtarınız. |
| `orderBy` | `string` | focDate Tarihe göre sırala |
| `limit` | `string` | İtem Sayısı Sınırı |


  