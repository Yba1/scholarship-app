
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model StudentProfile
 * 
 */
export type StudentProfile = $Result.DefaultSelection<Prisma.$StudentProfilePayload>
/**
 * Model Scholarship
 * 
 */
export type Scholarship = $Result.DefaultSelection<Prisma.$ScholarshipPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model EssayRequest
 * 
 */
export type EssayRequest = $Result.DefaultSelection<Prisma.$EssayRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentProfile`: Exposes CRUD operations for the **StudentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentProfiles
    * const studentProfiles = await prisma.studentProfile.findMany()
    * ```
    */
  get studentProfile(): Prisma.StudentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scholarship`: Exposes CRUD operations for the **Scholarship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Scholarships
    * const scholarships = await prisma.scholarship.findMany()
    * ```
    */
  get scholarship(): Prisma.ScholarshipDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.essayRequest`: Exposes CRUD operations for the **EssayRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EssayRequests
    * const essayRequests = await prisma.essayRequest.findMany()
    * ```
    */
  get essayRequest(): Prisma.EssayRequestDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    StudentProfile: 'StudentProfile',
    Scholarship: 'Scholarship',
    Match: 'Match',
    Application: 'Application',
    EssayRequest: 'EssayRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "studentProfile" | "scholarship" | "match" | "application" | "essayRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      StudentProfile: {
        payload: Prisma.$StudentProfilePayload<ExtArgs>
        fields: Prisma.StudentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findFirst: {
            args: Prisma.StudentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          findMany: {
            args: Prisma.StudentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          create: {
            args: Prisma.StudentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          createMany: {
            args: Prisma.StudentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          delete: {
            args: Prisma.StudentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          update: {
            args: Prisma.StudentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          deleteMany: {
            args: Prisma.StudentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>[]
          }
          upsert: {
            args: Prisma.StudentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentProfilePayload>
          }
          aggregate: {
            args: Prisma.StudentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentProfile>
          }
          groupBy: {
            args: Prisma.StudentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<StudentProfileCountAggregateOutputType> | number
          }
        }
      }
      Scholarship: {
        payload: Prisma.$ScholarshipPayload<ExtArgs>
        fields: Prisma.ScholarshipFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScholarshipFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScholarshipFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>
          }
          findFirst: {
            args: Prisma.ScholarshipFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScholarshipFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>
          }
          findMany: {
            args: Prisma.ScholarshipFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>[]
          }
          create: {
            args: Prisma.ScholarshipCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>
          }
          createMany: {
            args: Prisma.ScholarshipCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScholarshipCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>[]
          }
          delete: {
            args: Prisma.ScholarshipDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>
          }
          update: {
            args: Prisma.ScholarshipUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>
          }
          deleteMany: {
            args: Prisma.ScholarshipDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScholarshipUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScholarshipUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>[]
          }
          upsert: {
            args: Prisma.ScholarshipUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScholarshipPayload>
          }
          aggregate: {
            args: Prisma.ScholarshipAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScholarship>
          }
          groupBy: {
            args: Prisma.ScholarshipGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScholarshipGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScholarshipCountArgs<ExtArgs>
            result: $Utils.Optional<ScholarshipCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      EssayRequest: {
        payload: Prisma.$EssayRequestPayload<ExtArgs>
        fields: Prisma.EssayRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EssayRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EssayRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayRequestPayload>
          }
          findFirst: {
            args: Prisma.EssayRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EssayRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayRequestPayload>
          }
          findMany: {
            args: Prisma.EssayRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayRequestPayload>[]
          }
          create: {
            args: Prisma.EssayRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayRequestPayload>
          }
          createMany: {
            args: Prisma.EssayRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EssayRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayRequestPayload>[]
          }
          delete: {
            args: Prisma.EssayRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayRequestPayload>
          }
          update: {
            args: Prisma.EssayRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayRequestPayload>
          }
          deleteMany: {
            args: Prisma.EssayRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EssayRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EssayRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayRequestPayload>[]
          }
          upsert: {
            args: Prisma.EssayRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EssayRequestPayload>
          }
          aggregate: {
            args: Prisma.EssayRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEssayRequest>
          }
          groupBy: {
            args: Prisma.EssayRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<EssayRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.EssayRequestCountArgs<ExtArgs>
            result: $Utils.Optional<EssayRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    studentProfile?: StudentProfileOmit
    scholarship?: ScholarshipOmit
    match?: MatchOmit
    application?: ApplicationOmit
    essayRequest?: EssayRequestOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentProfileCountOutputType
   */

  export type StudentProfileCountOutputType = {
    matches: number
    applications: number
    essayRequests: number
  }

  export type StudentProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | StudentProfileCountOutputTypeCountMatchesArgs
    applications?: boolean | StudentProfileCountOutputTypeCountApplicationsArgs
    essayRequests?: boolean | StudentProfileCountOutputTypeCountEssayRequestsArgs
  }

  // Custom InputTypes
  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfileCountOutputType
     */
    select?: StudentProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * StudentProfileCountOutputType without action
   */
  export type StudentProfileCountOutputTypeCountEssayRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EssayRequestWhereInput
  }


  /**
   * Count Type ScholarshipCountOutputType
   */

  export type ScholarshipCountOutputType = {
    matches: number
    applications: number
  }

  export type ScholarshipCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | ScholarshipCountOutputTypeCountMatchesArgs
    applications?: boolean | ScholarshipCountOutputTypeCountApplicationsArgs
  }

  // Custom InputTypes
  /**
   * ScholarshipCountOutputType without action
   */
  export type ScholarshipCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScholarshipCountOutputType
     */
    select?: ScholarshipCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScholarshipCountOutputType without action
   */
  export type ScholarshipCountOutputTypeCountMatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
  }

  /**
   * ScholarshipCountOutputType without action
   */
  export type ScholarshipCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    passwordHash: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    studentProfile?: boolean | User$studentProfileArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentProfile?: boolean | User$studentProfileArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      studentProfile: Prisma.$StudentProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      passwordHash: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentProfile<T extends User$studentProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$studentProfileArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.studentProfile
   */
  export type User$studentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    where?: StudentProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model StudentProfile
   */

  export type AggregateStudentProfile = {
    _count: StudentProfileCountAggregateOutputType | null
    _avg: StudentProfileAvgAggregateOutputType | null
    _sum: StudentProfileSumAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  export type StudentProfileAvgAggregateOutputType = {
    gpa: number | null
  }

  export type StudentProfileSumAggregateOutputType = {
    gpa: number | null
  }

  export type StudentProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    gpa: number | null
    majorInterest: string | null
    state: string | null
    country: string | null
    gender: string | null
    ethnicity: string | null
    financialNeed: boolean | null
    firstGeneration: boolean | null
    createdAt: Date | null
  }

  export type StudentProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    firstName: string | null
    lastName: string | null
    gpa: number | null
    majorInterest: string | null
    state: string | null
    country: string | null
    gender: string | null
    ethnicity: string | null
    financialNeed: boolean | null
    firstGeneration: boolean | null
    createdAt: Date | null
  }

  export type StudentProfileCountAggregateOutputType = {
    id: number
    userId: number
    firstName: number
    lastName: number
    gpa: number
    majorInterest: number
    state: number
    country: number
    gender: number
    ethnicity: number
    financialNeed: number
    firstGeneration: number
    activities: number
    createdAt: number
    _all: number
  }


  export type StudentProfileAvgAggregateInputType = {
    gpa?: true
  }

  export type StudentProfileSumAggregateInputType = {
    gpa?: true
  }

  export type StudentProfileMinAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    gpa?: true
    majorInterest?: true
    state?: true
    country?: true
    gender?: true
    ethnicity?: true
    financialNeed?: true
    firstGeneration?: true
    createdAt?: true
  }

  export type StudentProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    gpa?: true
    majorInterest?: true
    state?: true
    country?: true
    gender?: true
    ethnicity?: true
    financialNeed?: true
    firstGeneration?: true
    createdAt?: true
  }

  export type StudentProfileCountAggregateInputType = {
    id?: true
    userId?: true
    firstName?: true
    lastName?: true
    gpa?: true
    majorInterest?: true
    state?: true
    country?: true
    gender?: true
    ethnicity?: true
    financialNeed?: true
    firstGeneration?: true
    activities?: true
    createdAt?: true
    _all?: true
  }

  export type StudentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfile to aggregate.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentProfiles
    **/
    _count?: true | StudentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentProfileMaxAggregateInputType
  }

  export type GetStudentProfileAggregateType<T extends StudentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentProfile[P]>
      : GetScalarType<T[P], AggregateStudentProfile[P]>
  }




  export type StudentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentProfileWhereInput
    orderBy?: StudentProfileOrderByWithAggregationInput | StudentProfileOrderByWithAggregationInput[]
    by: StudentProfileScalarFieldEnum[] | StudentProfileScalarFieldEnum
    having?: StudentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentProfileCountAggregateInputType | true
    _avg?: StudentProfileAvgAggregateInputType
    _sum?: StudentProfileSumAggregateInputType
    _min?: StudentProfileMinAggregateInputType
    _max?: StudentProfileMaxAggregateInputType
  }

  export type StudentProfileGroupByOutputType = {
    id: string
    userId: string
    firstName: string
    lastName: string
    gpa: number
    majorInterest: string
    state: string
    country: string
    gender: string | null
    ethnicity: string | null
    financialNeed: boolean
    firstGeneration: boolean
    activities: string[]
    createdAt: Date
    _count: StudentProfileCountAggregateOutputType | null
    _avg: StudentProfileAvgAggregateOutputType | null
    _sum: StudentProfileSumAggregateOutputType | null
    _min: StudentProfileMinAggregateOutputType | null
    _max: StudentProfileMaxAggregateOutputType | null
  }

  type GetStudentProfileGroupByPayload<T extends StudentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], StudentProfileGroupByOutputType[P]>
        }
      >
    >


  export type StudentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    gpa?: boolean
    majorInterest?: boolean
    state?: boolean
    country?: boolean
    gender?: boolean
    ethnicity?: boolean
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    matches?: boolean | StudentProfile$matchesArgs<ExtArgs>
    applications?: boolean | StudentProfile$applicationsArgs<ExtArgs>
    essayRequests?: boolean | StudentProfile$essayRequestsArgs<ExtArgs>
    _count?: boolean | StudentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    gpa?: boolean
    majorInterest?: boolean
    state?: boolean
    country?: boolean
    gender?: boolean
    ethnicity?: boolean
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    gpa?: boolean
    majorInterest?: boolean
    state?: boolean
    country?: boolean
    gender?: boolean
    ethnicity?: boolean
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentProfile"]>

  export type StudentProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    firstName?: boolean
    lastName?: boolean
    gpa?: boolean
    majorInterest?: boolean
    state?: boolean
    country?: boolean
    gender?: boolean
    ethnicity?: boolean
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: boolean
    createdAt?: boolean
  }

  export type StudentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "gpa" | "majorInterest" | "state" | "country" | "gender" | "ethnicity" | "financialNeed" | "firstGeneration" | "activities" | "createdAt", ExtArgs["result"]["studentProfile"]>
  export type StudentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    matches?: boolean | StudentProfile$matchesArgs<ExtArgs>
    applications?: boolean | StudentProfile$applicationsArgs<ExtArgs>
    essayRequests?: boolean | StudentProfile$essayRequestsArgs<ExtArgs>
    _count?: boolean | StudentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StudentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StudentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      matches: Prisma.$MatchPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      essayRequests: Prisma.$EssayRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      firstName: string
      lastName: string
      gpa: number
      majorInterest: string
      state: string
      country: string
      gender: string | null
      ethnicity: string | null
      financialNeed: boolean
      firstGeneration: boolean
      activities: string[]
      createdAt: Date
    }, ExtArgs["result"]["studentProfile"]>
    composites: {}
  }

  type StudentProfileGetPayload<S extends boolean | null | undefined | StudentProfileDefaultArgs> = $Result.GetResult<Prisma.$StudentProfilePayload, S>

  type StudentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentProfileCountAggregateInputType | true
    }

  export interface StudentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentProfile'], meta: { name: 'StudentProfile' } }
    /**
     * Find zero or one StudentProfile that matches the filter.
     * @param {StudentProfileFindUniqueArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentProfileFindUniqueArgs>(args: SelectSubset<T, StudentProfileFindUniqueArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentProfileFindUniqueOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentProfileFindFirstArgs>(args?: SelectSubset<T, StudentProfileFindFirstArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindFirstOrThrowArgs} args - Arguments to find a StudentProfile
     * @example
     * // Get one StudentProfile
     * const studentProfile = await prisma.studentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany()
     * 
     * // Get first 10 StudentProfiles
     * const studentProfiles = await prisma.studentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentProfileFindManyArgs>(args?: SelectSubset<T, StudentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentProfile.
     * @param {StudentProfileCreateArgs} args - Arguments to create a StudentProfile.
     * @example
     * // Create one StudentProfile
     * const StudentProfile = await prisma.studentProfile.create({
     *   data: {
     *     // ... data to create a StudentProfile
     *   }
     * })
     * 
     */
    create<T extends StudentProfileCreateArgs>(args: SelectSubset<T, StudentProfileCreateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentProfiles.
     * @param {StudentProfileCreateManyArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentProfileCreateManyArgs>(args?: SelectSubset<T, StudentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentProfiles and returns the data saved in the database.
     * @param {StudentProfileCreateManyAndReturnArgs} args - Arguments to create many StudentProfiles.
     * @example
     * // Create many StudentProfiles
     * const studentProfile = await prisma.studentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentProfile.
     * @param {StudentProfileDeleteArgs} args - Arguments to delete one StudentProfile.
     * @example
     * // Delete one StudentProfile
     * const StudentProfile = await prisma.studentProfile.delete({
     *   where: {
     *     // ... filter to delete one StudentProfile
     *   }
     * })
     * 
     */
    delete<T extends StudentProfileDeleteArgs>(args: SelectSubset<T, StudentProfileDeleteArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentProfile.
     * @param {StudentProfileUpdateArgs} args - Arguments to update one StudentProfile.
     * @example
     * // Update one StudentProfile
     * const studentProfile = await prisma.studentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentProfileUpdateArgs>(args: SelectSubset<T, StudentProfileUpdateArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentProfiles.
     * @param {StudentProfileDeleteManyArgs} args - Arguments to filter StudentProfiles to delete.
     * @example
     * // Delete a few StudentProfiles
     * const { count } = await prisma.studentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentProfileDeleteManyArgs>(args?: SelectSubset<T, StudentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentProfileUpdateManyArgs>(args: SelectSubset<T, StudentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentProfiles and returns the data updated in the database.
     * @param {StudentProfileUpdateManyAndReturnArgs} args - Arguments to update many StudentProfiles.
     * @example
     * // Update many StudentProfiles
     * const studentProfile = await prisma.studentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentProfiles and only return the `id`
     * const studentProfileWithIdOnly = await prisma.studentProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentProfile.
     * @param {StudentProfileUpsertArgs} args - Arguments to update or create a StudentProfile.
     * @example
     * // Update or create a StudentProfile
     * const studentProfile = await prisma.studentProfile.upsert({
     *   create: {
     *     // ... data to create a StudentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentProfile we want to update
     *   }
     * })
     */
    upsert<T extends StudentProfileUpsertArgs>(args: SelectSubset<T, StudentProfileUpsertArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileCountArgs} args - Arguments to filter StudentProfiles to count.
     * @example
     * // Count the number of StudentProfiles
     * const count = await prisma.studentProfile.count({
     *   where: {
     *     // ... the filter for the StudentProfiles we want to count
     *   }
     * })
    **/
    count<T extends StudentProfileCountArgs>(
      args?: Subset<T, StudentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentProfileAggregateArgs>(args: Subset<T, StudentProfileAggregateArgs>): Prisma.PrismaPromise<GetStudentProfileAggregateType<T>>

    /**
     * Group by StudentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentProfileGroupByArgs['orderBy'] }
        : { orderBy?: StudentProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentProfile model
   */
  readonly fields: StudentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    matches<T extends StudentProfile$matchesArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends StudentProfile$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    essayRequests<T extends StudentProfile$essayRequestsArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfile$essayRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EssayRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StudentProfile model
   */
  interface StudentProfileFieldRefs {
    readonly id: FieldRef<"StudentProfile", 'String'>
    readonly userId: FieldRef<"StudentProfile", 'String'>
    readonly firstName: FieldRef<"StudentProfile", 'String'>
    readonly lastName: FieldRef<"StudentProfile", 'String'>
    readonly gpa: FieldRef<"StudentProfile", 'Float'>
    readonly majorInterest: FieldRef<"StudentProfile", 'String'>
    readonly state: FieldRef<"StudentProfile", 'String'>
    readonly country: FieldRef<"StudentProfile", 'String'>
    readonly gender: FieldRef<"StudentProfile", 'String'>
    readonly ethnicity: FieldRef<"StudentProfile", 'String'>
    readonly financialNeed: FieldRef<"StudentProfile", 'Boolean'>
    readonly firstGeneration: FieldRef<"StudentProfile", 'Boolean'>
    readonly activities: FieldRef<"StudentProfile", 'String[]'>
    readonly createdAt: FieldRef<"StudentProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentProfile findUnique
   */
  export type StudentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findUniqueOrThrow
   */
  export type StudentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile findFirst
   */
  export type StudentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findFirstOrThrow
   */
  export type StudentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfile to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentProfiles.
     */
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile findMany
   */
  export type StudentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter, which StudentProfiles to fetch.
     */
    where?: StudentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentProfiles to fetch.
     */
    orderBy?: StudentProfileOrderByWithRelationInput | StudentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentProfiles.
     */
    cursor?: StudentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentProfiles.
     */
    skip?: number
    distinct?: StudentProfileScalarFieldEnum | StudentProfileScalarFieldEnum[]
  }

  /**
   * StudentProfile create
   */
  export type StudentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentProfile.
     */
    data: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
  }

  /**
   * StudentProfile createMany
   */
  export type StudentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentProfile createManyAndReturn
   */
  export type StudentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many StudentProfiles.
     */
    data: StudentProfileCreateManyInput | StudentProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile update
   */
  export type StudentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentProfile.
     */
    data: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
    /**
     * Choose, which StudentProfile to update.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile updateMany
   */
  export type StudentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
  }

  /**
   * StudentProfile updateManyAndReturn
   */
  export type StudentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * The data used to update StudentProfiles.
     */
    data: XOR<StudentProfileUpdateManyMutationInput, StudentProfileUncheckedUpdateManyInput>
    /**
     * Filter which StudentProfiles to update
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentProfile upsert
   */
  export type StudentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentProfile to update in case it exists.
     */
    where: StudentProfileWhereUniqueInput
    /**
     * In case the StudentProfile found by the `where` argument doesn't exist, create a new StudentProfile with this data.
     */
    create: XOR<StudentProfileCreateInput, StudentProfileUncheckedCreateInput>
    /**
     * In case the StudentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentProfileUpdateInput, StudentProfileUncheckedUpdateInput>
  }

  /**
   * StudentProfile delete
   */
  export type StudentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
    /**
     * Filter which StudentProfile to delete.
     */
    where: StudentProfileWhereUniqueInput
  }

  /**
   * StudentProfile deleteMany
   */
  export type StudentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentProfiles to delete
     */
    where?: StudentProfileWhereInput
    /**
     * Limit how many StudentProfiles to delete.
     */
    limit?: number
  }

  /**
   * StudentProfile.matches
   */
  export type StudentProfile$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * StudentProfile.applications
   */
  export type StudentProfile$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * StudentProfile.essayRequests
   */
  export type StudentProfile$essayRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestInclude<ExtArgs> | null
    where?: EssayRequestWhereInput
    orderBy?: EssayRequestOrderByWithRelationInput | EssayRequestOrderByWithRelationInput[]
    cursor?: EssayRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EssayRequestScalarFieldEnum | EssayRequestScalarFieldEnum[]
  }

  /**
   * StudentProfile without action
   */
  export type StudentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentProfile
     */
    select?: StudentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentProfile
     */
    omit?: StudentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentProfileInclude<ExtArgs> | null
  }


  /**
   * Model Scholarship
   */

  export type AggregateScholarship = {
    _count: ScholarshipCountAggregateOutputType | null
    _avg: ScholarshipAvgAggregateOutputType | null
    _sum: ScholarshipSumAggregateOutputType | null
    _min: ScholarshipMinAggregateOutputType | null
    _max: ScholarshipMaxAggregateOutputType | null
  }

  export type ScholarshipAvgAggregateOutputType = {
    amount: number | null
    gpaMin: number | null
    estimatedApplicants: number | null
    numberOfWinners: number | null
  }

  export type ScholarshipSumAggregateOutputType = {
    amount: number | null
    gpaMin: number | null
    estimatedApplicants: number | null
    numberOfWinners: number | null
  }

  export type ScholarshipMinAggregateOutputType = {
    id: string | null
    title: string | null
    organization: string | null
    amount: number | null
    description: string | null
    deadline: Date | null
    gpaMin: number | null
    majorRequired: string | null
    stateRequired: string | null
    countryRequired: string | null
    genderRequired: string | null
    ethnicityRequired: string | null
    financialNeedRequired: boolean | null
    essayRequired: boolean | null
    estimatedApplicants: number | null
    numberOfWinners: number | null
    applicationUrl: string | null
    createdAt: Date | null
  }

  export type ScholarshipMaxAggregateOutputType = {
    id: string | null
    title: string | null
    organization: string | null
    amount: number | null
    description: string | null
    deadline: Date | null
    gpaMin: number | null
    majorRequired: string | null
    stateRequired: string | null
    countryRequired: string | null
    genderRequired: string | null
    ethnicityRequired: string | null
    financialNeedRequired: boolean | null
    essayRequired: boolean | null
    estimatedApplicants: number | null
    numberOfWinners: number | null
    applicationUrl: string | null
    createdAt: Date | null
  }

  export type ScholarshipCountAggregateOutputType = {
    id: number
    title: number
    organization: number
    amount: number
    description: number
    deadline: number
    gpaMin: number
    majorRequired: number
    stateRequired: number
    countryRequired: number
    genderRequired: number
    ethnicityRequired: number
    financialNeedRequired: number
    essayRequired: number
    estimatedApplicants: number
    numberOfWinners: number
    applicationUrl: number
    createdAt: number
    _all: number
  }


  export type ScholarshipAvgAggregateInputType = {
    amount?: true
    gpaMin?: true
    estimatedApplicants?: true
    numberOfWinners?: true
  }

  export type ScholarshipSumAggregateInputType = {
    amount?: true
    gpaMin?: true
    estimatedApplicants?: true
    numberOfWinners?: true
  }

  export type ScholarshipMinAggregateInputType = {
    id?: true
    title?: true
    organization?: true
    amount?: true
    description?: true
    deadline?: true
    gpaMin?: true
    majorRequired?: true
    stateRequired?: true
    countryRequired?: true
    genderRequired?: true
    ethnicityRequired?: true
    financialNeedRequired?: true
    essayRequired?: true
    estimatedApplicants?: true
    numberOfWinners?: true
    applicationUrl?: true
    createdAt?: true
  }

  export type ScholarshipMaxAggregateInputType = {
    id?: true
    title?: true
    organization?: true
    amount?: true
    description?: true
    deadline?: true
    gpaMin?: true
    majorRequired?: true
    stateRequired?: true
    countryRequired?: true
    genderRequired?: true
    ethnicityRequired?: true
    financialNeedRequired?: true
    essayRequired?: true
    estimatedApplicants?: true
    numberOfWinners?: true
    applicationUrl?: true
    createdAt?: true
  }

  export type ScholarshipCountAggregateInputType = {
    id?: true
    title?: true
    organization?: true
    amount?: true
    description?: true
    deadline?: true
    gpaMin?: true
    majorRequired?: true
    stateRequired?: true
    countryRequired?: true
    genderRequired?: true
    ethnicityRequired?: true
    financialNeedRequired?: true
    essayRequired?: true
    estimatedApplicants?: true
    numberOfWinners?: true
    applicationUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ScholarshipAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scholarship to aggregate.
     */
    where?: ScholarshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     */
    orderBy?: ScholarshipOrderByWithRelationInput | ScholarshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScholarshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Scholarships
    **/
    _count?: true | ScholarshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScholarshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScholarshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScholarshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScholarshipMaxAggregateInputType
  }

  export type GetScholarshipAggregateType<T extends ScholarshipAggregateArgs> = {
        [P in keyof T & keyof AggregateScholarship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScholarship[P]>
      : GetScalarType<T[P], AggregateScholarship[P]>
  }




  export type ScholarshipGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScholarshipWhereInput
    orderBy?: ScholarshipOrderByWithAggregationInput | ScholarshipOrderByWithAggregationInput[]
    by: ScholarshipScalarFieldEnum[] | ScholarshipScalarFieldEnum
    having?: ScholarshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScholarshipCountAggregateInputType | true
    _avg?: ScholarshipAvgAggregateInputType
    _sum?: ScholarshipSumAggregateInputType
    _min?: ScholarshipMinAggregateInputType
    _max?: ScholarshipMaxAggregateInputType
  }

  export type ScholarshipGroupByOutputType = {
    id: string
    title: string
    organization: string
    amount: number
    description: string
    deadline: Date
    gpaMin: number | null
    majorRequired: string | null
    stateRequired: string | null
    countryRequired: string | null
    genderRequired: string | null
    ethnicityRequired: string | null
    financialNeedRequired: boolean
    essayRequired: boolean
    estimatedApplicants: number
    numberOfWinners: number
    applicationUrl: string
    createdAt: Date
    _count: ScholarshipCountAggregateOutputType | null
    _avg: ScholarshipAvgAggregateOutputType | null
    _sum: ScholarshipSumAggregateOutputType | null
    _min: ScholarshipMinAggregateOutputType | null
    _max: ScholarshipMaxAggregateOutputType | null
  }

  type GetScholarshipGroupByPayload<T extends ScholarshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScholarshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScholarshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScholarshipGroupByOutputType[P]>
            : GetScalarType<T[P], ScholarshipGroupByOutputType[P]>
        }
      >
    >


  export type ScholarshipSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    organization?: boolean
    amount?: boolean
    description?: boolean
    deadline?: boolean
    gpaMin?: boolean
    majorRequired?: boolean
    stateRequired?: boolean
    countryRequired?: boolean
    genderRequired?: boolean
    ethnicityRequired?: boolean
    financialNeedRequired?: boolean
    essayRequired?: boolean
    estimatedApplicants?: boolean
    numberOfWinners?: boolean
    applicationUrl?: boolean
    createdAt?: boolean
    matches?: boolean | Scholarship$matchesArgs<ExtArgs>
    applications?: boolean | Scholarship$applicationsArgs<ExtArgs>
    _count?: boolean | ScholarshipCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scholarship"]>

  export type ScholarshipSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    organization?: boolean
    amount?: boolean
    description?: boolean
    deadline?: boolean
    gpaMin?: boolean
    majorRequired?: boolean
    stateRequired?: boolean
    countryRequired?: boolean
    genderRequired?: boolean
    ethnicityRequired?: boolean
    financialNeedRequired?: boolean
    essayRequired?: boolean
    estimatedApplicants?: boolean
    numberOfWinners?: boolean
    applicationUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["scholarship"]>

  export type ScholarshipSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    organization?: boolean
    amount?: boolean
    description?: boolean
    deadline?: boolean
    gpaMin?: boolean
    majorRequired?: boolean
    stateRequired?: boolean
    countryRequired?: boolean
    genderRequired?: boolean
    ethnicityRequired?: boolean
    financialNeedRequired?: boolean
    essayRequired?: boolean
    estimatedApplicants?: boolean
    numberOfWinners?: boolean
    applicationUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["scholarship"]>

  export type ScholarshipSelectScalar = {
    id?: boolean
    title?: boolean
    organization?: boolean
    amount?: boolean
    description?: boolean
    deadline?: boolean
    gpaMin?: boolean
    majorRequired?: boolean
    stateRequired?: boolean
    countryRequired?: boolean
    genderRequired?: boolean
    ethnicityRequired?: boolean
    financialNeedRequired?: boolean
    essayRequired?: boolean
    estimatedApplicants?: boolean
    numberOfWinners?: boolean
    applicationUrl?: boolean
    createdAt?: boolean
  }

  export type ScholarshipOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "organization" | "amount" | "description" | "deadline" | "gpaMin" | "majorRequired" | "stateRequired" | "countryRequired" | "genderRequired" | "ethnicityRequired" | "financialNeedRequired" | "essayRequired" | "estimatedApplicants" | "numberOfWinners" | "applicationUrl" | "createdAt", ExtArgs["result"]["scholarship"]>
  export type ScholarshipInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matches?: boolean | Scholarship$matchesArgs<ExtArgs>
    applications?: boolean | Scholarship$applicationsArgs<ExtArgs>
    _count?: boolean | ScholarshipCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ScholarshipIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ScholarshipIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ScholarshipPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scholarship"
    objects: {
      matches: Prisma.$MatchPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      organization: string
      amount: number
      description: string
      deadline: Date
      gpaMin: number | null
      majorRequired: string | null
      stateRequired: string | null
      countryRequired: string | null
      genderRequired: string | null
      ethnicityRequired: string | null
      financialNeedRequired: boolean
      essayRequired: boolean
      estimatedApplicants: number
      numberOfWinners: number
      applicationUrl: string
      createdAt: Date
    }, ExtArgs["result"]["scholarship"]>
    composites: {}
  }

  type ScholarshipGetPayload<S extends boolean | null | undefined | ScholarshipDefaultArgs> = $Result.GetResult<Prisma.$ScholarshipPayload, S>

  type ScholarshipCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScholarshipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScholarshipCountAggregateInputType | true
    }

  export interface ScholarshipDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scholarship'], meta: { name: 'Scholarship' } }
    /**
     * Find zero or one Scholarship that matches the filter.
     * @param {ScholarshipFindUniqueArgs} args - Arguments to find a Scholarship
     * @example
     * // Get one Scholarship
     * const scholarship = await prisma.scholarship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScholarshipFindUniqueArgs>(args: SelectSubset<T, ScholarshipFindUniqueArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scholarship that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScholarshipFindUniqueOrThrowArgs} args - Arguments to find a Scholarship
     * @example
     * // Get one Scholarship
     * const scholarship = await prisma.scholarship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScholarshipFindUniqueOrThrowArgs>(args: SelectSubset<T, ScholarshipFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scholarship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipFindFirstArgs} args - Arguments to find a Scholarship
     * @example
     * // Get one Scholarship
     * const scholarship = await prisma.scholarship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScholarshipFindFirstArgs>(args?: SelectSubset<T, ScholarshipFindFirstArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scholarship that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipFindFirstOrThrowArgs} args - Arguments to find a Scholarship
     * @example
     * // Get one Scholarship
     * const scholarship = await prisma.scholarship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScholarshipFindFirstOrThrowArgs>(args?: SelectSubset<T, ScholarshipFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Scholarships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Scholarships
     * const scholarships = await prisma.scholarship.findMany()
     * 
     * // Get first 10 Scholarships
     * const scholarships = await prisma.scholarship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scholarshipWithIdOnly = await prisma.scholarship.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScholarshipFindManyArgs>(args?: SelectSubset<T, ScholarshipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scholarship.
     * @param {ScholarshipCreateArgs} args - Arguments to create a Scholarship.
     * @example
     * // Create one Scholarship
     * const Scholarship = await prisma.scholarship.create({
     *   data: {
     *     // ... data to create a Scholarship
     *   }
     * })
     * 
     */
    create<T extends ScholarshipCreateArgs>(args: SelectSubset<T, ScholarshipCreateArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Scholarships.
     * @param {ScholarshipCreateManyArgs} args - Arguments to create many Scholarships.
     * @example
     * // Create many Scholarships
     * const scholarship = await prisma.scholarship.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScholarshipCreateManyArgs>(args?: SelectSubset<T, ScholarshipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Scholarships and returns the data saved in the database.
     * @param {ScholarshipCreateManyAndReturnArgs} args - Arguments to create many Scholarships.
     * @example
     * // Create many Scholarships
     * const scholarship = await prisma.scholarship.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Scholarships and only return the `id`
     * const scholarshipWithIdOnly = await prisma.scholarship.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScholarshipCreateManyAndReturnArgs>(args?: SelectSubset<T, ScholarshipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scholarship.
     * @param {ScholarshipDeleteArgs} args - Arguments to delete one Scholarship.
     * @example
     * // Delete one Scholarship
     * const Scholarship = await prisma.scholarship.delete({
     *   where: {
     *     // ... filter to delete one Scholarship
     *   }
     * })
     * 
     */
    delete<T extends ScholarshipDeleteArgs>(args: SelectSubset<T, ScholarshipDeleteArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scholarship.
     * @param {ScholarshipUpdateArgs} args - Arguments to update one Scholarship.
     * @example
     * // Update one Scholarship
     * const scholarship = await prisma.scholarship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScholarshipUpdateArgs>(args: SelectSubset<T, ScholarshipUpdateArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Scholarships.
     * @param {ScholarshipDeleteManyArgs} args - Arguments to filter Scholarships to delete.
     * @example
     * // Delete a few Scholarships
     * const { count } = await prisma.scholarship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScholarshipDeleteManyArgs>(args?: SelectSubset<T, ScholarshipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scholarships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Scholarships
     * const scholarship = await prisma.scholarship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScholarshipUpdateManyArgs>(args: SelectSubset<T, ScholarshipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Scholarships and returns the data updated in the database.
     * @param {ScholarshipUpdateManyAndReturnArgs} args - Arguments to update many Scholarships.
     * @example
     * // Update many Scholarships
     * const scholarship = await prisma.scholarship.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Scholarships and only return the `id`
     * const scholarshipWithIdOnly = await prisma.scholarship.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ScholarshipUpdateManyAndReturnArgs>(args: SelectSubset<T, ScholarshipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scholarship.
     * @param {ScholarshipUpsertArgs} args - Arguments to update or create a Scholarship.
     * @example
     * // Update or create a Scholarship
     * const scholarship = await prisma.scholarship.upsert({
     *   create: {
     *     // ... data to create a Scholarship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scholarship we want to update
     *   }
     * })
     */
    upsert<T extends ScholarshipUpsertArgs>(args: SelectSubset<T, ScholarshipUpsertArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Scholarships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipCountArgs} args - Arguments to filter Scholarships to count.
     * @example
     * // Count the number of Scholarships
     * const count = await prisma.scholarship.count({
     *   where: {
     *     // ... the filter for the Scholarships we want to count
     *   }
     * })
    **/
    count<T extends ScholarshipCountArgs>(
      args?: Subset<T, ScholarshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScholarshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scholarship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ScholarshipAggregateArgs>(args: Subset<T, ScholarshipAggregateArgs>): Prisma.PrismaPromise<GetScholarshipAggregateType<T>>

    /**
     * Group by Scholarship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScholarshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ScholarshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScholarshipGroupByArgs['orderBy'] }
        : { orderBy?: ScholarshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ScholarshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScholarshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scholarship model
   */
  readonly fields: ScholarshipFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scholarship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScholarshipClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matches<T extends Scholarship$matchesArgs<ExtArgs> = {}>(args?: Subset<T, Scholarship$matchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Scholarship$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Scholarship$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Scholarship model
   */
  interface ScholarshipFieldRefs {
    readonly id: FieldRef<"Scholarship", 'String'>
    readonly title: FieldRef<"Scholarship", 'String'>
    readonly organization: FieldRef<"Scholarship", 'String'>
    readonly amount: FieldRef<"Scholarship", 'Int'>
    readonly description: FieldRef<"Scholarship", 'String'>
    readonly deadline: FieldRef<"Scholarship", 'DateTime'>
    readonly gpaMin: FieldRef<"Scholarship", 'Float'>
    readonly majorRequired: FieldRef<"Scholarship", 'String'>
    readonly stateRequired: FieldRef<"Scholarship", 'String'>
    readonly countryRequired: FieldRef<"Scholarship", 'String'>
    readonly genderRequired: FieldRef<"Scholarship", 'String'>
    readonly ethnicityRequired: FieldRef<"Scholarship", 'String'>
    readonly financialNeedRequired: FieldRef<"Scholarship", 'Boolean'>
    readonly essayRequired: FieldRef<"Scholarship", 'Boolean'>
    readonly estimatedApplicants: FieldRef<"Scholarship", 'Int'>
    readonly numberOfWinners: FieldRef<"Scholarship", 'Int'>
    readonly applicationUrl: FieldRef<"Scholarship", 'String'>
    readonly createdAt: FieldRef<"Scholarship", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Scholarship findUnique
   */
  export type ScholarshipFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * Filter, which Scholarship to fetch.
     */
    where: ScholarshipWhereUniqueInput
  }

  /**
   * Scholarship findUniqueOrThrow
   */
  export type ScholarshipFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * Filter, which Scholarship to fetch.
     */
    where: ScholarshipWhereUniqueInput
  }

  /**
   * Scholarship findFirst
   */
  export type ScholarshipFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * Filter, which Scholarship to fetch.
     */
    where?: ScholarshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     */
    orderBy?: ScholarshipOrderByWithRelationInput | ScholarshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scholarships.
     */
    cursor?: ScholarshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scholarships.
     */
    distinct?: ScholarshipScalarFieldEnum | ScholarshipScalarFieldEnum[]
  }

  /**
   * Scholarship findFirstOrThrow
   */
  export type ScholarshipFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * Filter, which Scholarship to fetch.
     */
    where?: ScholarshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     */
    orderBy?: ScholarshipOrderByWithRelationInput | ScholarshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Scholarships.
     */
    cursor?: ScholarshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Scholarships.
     */
    distinct?: ScholarshipScalarFieldEnum | ScholarshipScalarFieldEnum[]
  }

  /**
   * Scholarship findMany
   */
  export type ScholarshipFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * Filter, which Scholarships to fetch.
     */
    where?: ScholarshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Scholarships to fetch.
     */
    orderBy?: ScholarshipOrderByWithRelationInput | ScholarshipOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Scholarships.
     */
    cursor?: ScholarshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Scholarships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Scholarships.
     */
    skip?: number
    distinct?: ScholarshipScalarFieldEnum | ScholarshipScalarFieldEnum[]
  }

  /**
   * Scholarship create
   */
  export type ScholarshipCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * The data needed to create a Scholarship.
     */
    data: XOR<ScholarshipCreateInput, ScholarshipUncheckedCreateInput>
  }

  /**
   * Scholarship createMany
   */
  export type ScholarshipCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Scholarships.
     */
    data: ScholarshipCreateManyInput | ScholarshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scholarship createManyAndReturn
   */
  export type ScholarshipCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * The data used to create many Scholarships.
     */
    data: ScholarshipCreateManyInput | ScholarshipCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scholarship update
   */
  export type ScholarshipUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * The data needed to update a Scholarship.
     */
    data: XOR<ScholarshipUpdateInput, ScholarshipUncheckedUpdateInput>
    /**
     * Choose, which Scholarship to update.
     */
    where: ScholarshipWhereUniqueInput
  }

  /**
   * Scholarship updateMany
   */
  export type ScholarshipUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Scholarships.
     */
    data: XOR<ScholarshipUpdateManyMutationInput, ScholarshipUncheckedUpdateManyInput>
    /**
     * Filter which Scholarships to update
     */
    where?: ScholarshipWhereInput
    /**
     * Limit how many Scholarships to update.
     */
    limit?: number
  }

  /**
   * Scholarship updateManyAndReturn
   */
  export type ScholarshipUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * The data used to update Scholarships.
     */
    data: XOR<ScholarshipUpdateManyMutationInput, ScholarshipUncheckedUpdateManyInput>
    /**
     * Filter which Scholarships to update
     */
    where?: ScholarshipWhereInput
    /**
     * Limit how many Scholarships to update.
     */
    limit?: number
  }

  /**
   * Scholarship upsert
   */
  export type ScholarshipUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * The filter to search for the Scholarship to update in case it exists.
     */
    where: ScholarshipWhereUniqueInput
    /**
     * In case the Scholarship found by the `where` argument doesn't exist, create a new Scholarship with this data.
     */
    create: XOR<ScholarshipCreateInput, ScholarshipUncheckedCreateInput>
    /**
     * In case the Scholarship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScholarshipUpdateInput, ScholarshipUncheckedUpdateInput>
  }

  /**
   * Scholarship delete
   */
  export type ScholarshipDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
    /**
     * Filter which Scholarship to delete.
     */
    where: ScholarshipWhereUniqueInput
  }

  /**
   * Scholarship deleteMany
   */
  export type ScholarshipDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scholarships to delete
     */
    where?: ScholarshipWhereInput
    /**
     * Limit how many Scholarships to delete.
     */
    limit?: number
  }

  /**
   * Scholarship.matches
   */
  export type Scholarship$matchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    cursor?: MatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Scholarship.applications
   */
  export type Scholarship$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Scholarship without action
   */
  export type ScholarshipDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scholarship
     */
    select?: ScholarshipSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scholarship
     */
    omit?: ScholarshipOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScholarshipInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    matchScore: number | null
    winProbability: number | null
  }

  export type MatchSumAggregateOutputType = {
    matchScore: number | null
    winProbability: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    scholarshipId: string | null
    matchScore: number | null
    winProbability: number | null
    saved: boolean | null
    applied: boolean | null
    createdAt: Date | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    scholarshipId: string | null
    matchScore: number | null
    winProbability: number | null
    saved: boolean | null
    applied: boolean | null
    createdAt: Date | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    studentId: number
    scholarshipId: number
    matchScore: number
    winProbability: number
    saved: number
    applied: number
    createdAt: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    matchScore?: true
    winProbability?: true
  }

  export type MatchSumAggregateInputType = {
    matchScore?: true
    winProbability?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    studentId?: true
    scholarshipId?: true
    matchScore?: true
    winProbability?: true
    saved?: true
    applied?: true
    createdAt?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    studentId?: true
    scholarshipId?: true
    matchScore?: true
    winProbability?: true
    saved?: true
    applied?: true
    createdAt?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    studentId?: true
    scholarshipId?: true
    matchScore?: true
    winProbability?: true
    saved?: true
    applied?: true
    createdAt?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    studentId: string
    scholarshipId: string
    matchScore: number
    winProbability: number
    saved: boolean
    applied: boolean
    createdAt: Date
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    scholarshipId?: boolean
    matchScore?: boolean
    winProbability?: boolean
    saved?: boolean
    applied?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    scholarshipId?: boolean
    matchScore?: boolean
    winProbability?: boolean
    saved?: boolean
    applied?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    scholarshipId?: boolean
    matchScore?: boolean
    winProbability?: boolean
    saved?: boolean
    applied?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    studentId?: boolean
    scholarshipId?: boolean
    matchScore?: boolean
    winProbability?: boolean
    saved?: boolean
    applied?: boolean
    createdAt?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "scholarshipId" | "matchScore" | "winProbability" | "saved" | "applied" | "createdAt", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      student: Prisma.$StudentProfilePayload<ExtArgs>
      scholarship: Prisma.$ScholarshipPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      scholarshipId: string
      matchScore: number
      winProbability: number
      saved: boolean
      applied: boolean
      createdAt: Date
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scholarship<T extends ScholarshipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScholarshipDefaultArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly studentId: FieldRef<"Match", 'String'>
    readonly scholarshipId: FieldRef<"Match", 'String'>
    readonly matchScore: FieldRef<"Match", 'Int'>
    readonly winProbability: FieldRef<"Match", 'Float'>
    readonly saved: FieldRef<"Match", 'Boolean'>
    readonly applied: FieldRef<"Match", 'Boolean'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    scholarshipId: string | null
    status: string | null
    submittedAt: Date | null
    notes: string | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    scholarshipId: string | null
    status: string | null
    submittedAt: Date | null
    notes: string | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    studentId: number
    scholarshipId: number
    status: number
    submittedAt: number
    notes: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    studentId?: true
    scholarshipId?: true
    status?: true
    submittedAt?: true
    notes?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    studentId?: true
    scholarshipId?: true
    status?: true
    submittedAt?: true
    notes?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    studentId?: true
    scholarshipId?: true
    status?: true
    submittedAt?: true
    notes?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    studentId: string
    scholarshipId: string
    status: string
    submittedAt: Date | null
    notes: string | null
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    scholarshipId?: boolean
    status?: boolean
    submittedAt?: boolean
    notes?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    scholarshipId?: boolean
    status?: boolean
    submittedAt?: boolean
    notes?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    scholarshipId?: boolean
    status?: boolean
    submittedAt?: boolean
    notes?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    studentId?: boolean
    scholarshipId?: boolean
    status?: boolean
    submittedAt?: boolean
    notes?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "scholarshipId" | "status" | "submittedAt" | "notes", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
    scholarship?: boolean | ScholarshipDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      student: Prisma.$StudentProfilePayload<ExtArgs>
      scholarship: Prisma.$ScholarshipPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      scholarshipId: string
      status: string
      submittedAt: Date | null
      notes: string | null
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scholarship<T extends ScholarshipDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScholarshipDefaultArgs<ExtArgs>>): Prisma__ScholarshipClient<$Result.GetResult<Prisma.$ScholarshipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly studentId: FieldRef<"Application", 'String'>
    readonly scholarshipId: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'String'>
    readonly submittedAt: FieldRef<"Application", 'DateTime'>
    readonly notes: FieldRef<"Application", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model EssayRequest
   */

  export type AggregateEssayRequest = {
    _count: EssayRequestCountAggregateOutputType | null
    _min: EssayRequestMinAggregateOutputType | null
    _max: EssayRequestMaxAggregateOutputType | null
  }

  export type EssayRequestMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    prompt: string | null
    essayText: string | null
    aiFeedback: string | null
    createdAt: Date | null
  }

  export type EssayRequestMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    prompt: string | null
    essayText: string | null
    aiFeedback: string | null
    createdAt: Date | null
  }

  export type EssayRequestCountAggregateOutputType = {
    id: number
    studentId: number
    prompt: number
    essayText: number
    aiFeedback: number
    createdAt: number
    _all: number
  }


  export type EssayRequestMinAggregateInputType = {
    id?: true
    studentId?: true
    prompt?: true
    essayText?: true
    aiFeedback?: true
    createdAt?: true
  }

  export type EssayRequestMaxAggregateInputType = {
    id?: true
    studentId?: true
    prompt?: true
    essayText?: true
    aiFeedback?: true
    createdAt?: true
  }

  export type EssayRequestCountAggregateInputType = {
    id?: true
    studentId?: true
    prompt?: true
    essayText?: true
    aiFeedback?: true
    createdAt?: true
    _all?: true
  }

  export type EssayRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EssayRequest to aggregate.
     */
    where?: EssayRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EssayRequests to fetch.
     */
    orderBy?: EssayRequestOrderByWithRelationInput | EssayRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EssayRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EssayRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EssayRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EssayRequests
    **/
    _count?: true | EssayRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EssayRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EssayRequestMaxAggregateInputType
  }

  export type GetEssayRequestAggregateType<T extends EssayRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateEssayRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEssayRequest[P]>
      : GetScalarType<T[P], AggregateEssayRequest[P]>
  }




  export type EssayRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EssayRequestWhereInput
    orderBy?: EssayRequestOrderByWithAggregationInput | EssayRequestOrderByWithAggregationInput[]
    by: EssayRequestScalarFieldEnum[] | EssayRequestScalarFieldEnum
    having?: EssayRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EssayRequestCountAggregateInputType | true
    _min?: EssayRequestMinAggregateInputType
    _max?: EssayRequestMaxAggregateInputType
  }

  export type EssayRequestGroupByOutputType = {
    id: string
    studentId: string
    prompt: string
    essayText: string
    aiFeedback: string
    createdAt: Date
    _count: EssayRequestCountAggregateOutputType | null
    _min: EssayRequestMinAggregateOutputType | null
    _max: EssayRequestMaxAggregateOutputType | null
  }

  type GetEssayRequestGroupByPayload<T extends EssayRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EssayRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EssayRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EssayRequestGroupByOutputType[P]>
            : GetScalarType<T[P], EssayRequestGroupByOutputType[P]>
        }
      >
    >


  export type EssayRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    prompt?: boolean
    essayText?: boolean
    aiFeedback?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["essayRequest"]>

  export type EssayRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    prompt?: boolean
    essayText?: boolean
    aiFeedback?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["essayRequest"]>

  export type EssayRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    prompt?: boolean
    essayText?: boolean
    aiFeedback?: boolean
    createdAt?: boolean
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["essayRequest"]>

  export type EssayRequestSelectScalar = {
    id?: boolean
    studentId?: boolean
    prompt?: boolean
    essayText?: boolean
    aiFeedback?: boolean
    createdAt?: boolean
  }

  export type EssayRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "prompt" | "essayText" | "aiFeedback" | "createdAt", ExtArgs["result"]["essayRequest"]>
  export type EssayRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type EssayRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }
  export type EssayRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentProfileDefaultArgs<ExtArgs>
  }

  export type $EssayRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EssayRequest"
    objects: {
      student: Prisma.$StudentProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      prompt: string
      essayText: string
      aiFeedback: string
      createdAt: Date
    }, ExtArgs["result"]["essayRequest"]>
    composites: {}
  }

  type EssayRequestGetPayload<S extends boolean | null | undefined | EssayRequestDefaultArgs> = $Result.GetResult<Prisma.$EssayRequestPayload, S>

  type EssayRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EssayRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EssayRequestCountAggregateInputType | true
    }

  export interface EssayRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EssayRequest'], meta: { name: 'EssayRequest' } }
    /**
     * Find zero or one EssayRequest that matches the filter.
     * @param {EssayRequestFindUniqueArgs} args - Arguments to find a EssayRequest
     * @example
     * // Get one EssayRequest
     * const essayRequest = await prisma.essayRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EssayRequestFindUniqueArgs>(args: SelectSubset<T, EssayRequestFindUniqueArgs<ExtArgs>>): Prisma__EssayRequestClient<$Result.GetResult<Prisma.$EssayRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EssayRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EssayRequestFindUniqueOrThrowArgs} args - Arguments to find a EssayRequest
     * @example
     * // Get one EssayRequest
     * const essayRequest = await prisma.essayRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EssayRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, EssayRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EssayRequestClient<$Result.GetResult<Prisma.$EssayRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EssayRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayRequestFindFirstArgs} args - Arguments to find a EssayRequest
     * @example
     * // Get one EssayRequest
     * const essayRequest = await prisma.essayRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EssayRequestFindFirstArgs>(args?: SelectSubset<T, EssayRequestFindFirstArgs<ExtArgs>>): Prisma__EssayRequestClient<$Result.GetResult<Prisma.$EssayRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EssayRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayRequestFindFirstOrThrowArgs} args - Arguments to find a EssayRequest
     * @example
     * // Get one EssayRequest
     * const essayRequest = await prisma.essayRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EssayRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, EssayRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__EssayRequestClient<$Result.GetResult<Prisma.$EssayRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EssayRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EssayRequests
     * const essayRequests = await prisma.essayRequest.findMany()
     * 
     * // Get first 10 EssayRequests
     * const essayRequests = await prisma.essayRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const essayRequestWithIdOnly = await prisma.essayRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EssayRequestFindManyArgs>(args?: SelectSubset<T, EssayRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EssayRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EssayRequest.
     * @param {EssayRequestCreateArgs} args - Arguments to create a EssayRequest.
     * @example
     * // Create one EssayRequest
     * const EssayRequest = await prisma.essayRequest.create({
     *   data: {
     *     // ... data to create a EssayRequest
     *   }
     * })
     * 
     */
    create<T extends EssayRequestCreateArgs>(args: SelectSubset<T, EssayRequestCreateArgs<ExtArgs>>): Prisma__EssayRequestClient<$Result.GetResult<Prisma.$EssayRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EssayRequests.
     * @param {EssayRequestCreateManyArgs} args - Arguments to create many EssayRequests.
     * @example
     * // Create many EssayRequests
     * const essayRequest = await prisma.essayRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EssayRequestCreateManyArgs>(args?: SelectSubset<T, EssayRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EssayRequests and returns the data saved in the database.
     * @param {EssayRequestCreateManyAndReturnArgs} args - Arguments to create many EssayRequests.
     * @example
     * // Create many EssayRequests
     * const essayRequest = await prisma.essayRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EssayRequests and only return the `id`
     * const essayRequestWithIdOnly = await prisma.essayRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EssayRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, EssayRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EssayRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EssayRequest.
     * @param {EssayRequestDeleteArgs} args - Arguments to delete one EssayRequest.
     * @example
     * // Delete one EssayRequest
     * const EssayRequest = await prisma.essayRequest.delete({
     *   where: {
     *     // ... filter to delete one EssayRequest
     *   }
     * })
     * 
     */
    delete<T extends EssayRequestDeleteArgs>(args: SelectSubset<T, EssayRequestDeleteArgs<ExtArgs>>): Prisma__EssayRequestClient<$Result.GetResult<Prisma.$EssayRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EssayRequest.
     * @param {EssayRequestUpdateArgs} args - Arguments to update one EssayRequest.
     * @example
     * // Update one EssayRequest
     * const essayRequest = await prisma.essayRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EssayRequestUpdateArgs>(args: SelectSubset<T, EssayRequestUpdateArgs<ExtArgs>>): Prisma__EssayRequestClient<$Result.GetResult<Prisma.$EssayRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EssayRequests.
     * @param {EssayRequestDeleteManyArgs} args - Arguments to filter EssayRequests to delete.
     * @example
     * // Delete a few EssayRequests
     * const { count } = await prisma.essayRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EssayRequestDeleteManyArgs>(args?: SelectSubset<T, EssayRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EssayRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EssayRequests
     * const essayRequest = await prisma.essayRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EssayRequestUpdateManyArgs>(args: SelectSubset<T, EssayRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EssayRequests and returns the data updated in the database.
     * @param {EssayRequestUpdateManyAndReturnArgs} args - Arguments to update many EssayRequests.
     * @example
     * // Update many EssayRequests
     * const essayRequest = await prisma.essayRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EssayRequests and only return the `id`
     * const essayRequestWithIdOnly = await prisma.essayRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EssayRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, EssayRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EssayRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EssayRequest.
     * @param {EssayRequestUpsertArgs} args - Arguments to update or create a EssayRequest.
     * @example
     * // Update or create a EssayRequest
     * const essayRequest = await prisma.essayRequest.upsert({
     *   create: {
     *     // ... data to create a EssayRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EssayRequest we want to update
     *   }
     * })
     */
    upsert<T extends EssayRequestUpsertArgs>(args: SelectSubset<T, EssayRequestUpsertArgs<ExtArgs>>): Prisma__EssayRequestClient<$Result.GetResult<Prisma.$EssayRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EssayRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayRequestCountArgs} args - Arguments to filter EssayRequests to count.
     * @example
     * // Count the number of EssayRequests
     * const count = await prisma.essayRequest.count({
     *   where: {
     *     // ... the filter for the EssayRequests we want to count
     *   }
     * })
    **/
    count<T extends EssayRequestCountArgs>(
      args?: Subset<T, EssayRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EssayRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EssayRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EssayRequestAggregateArgs>(args: Subset<T, EssayRequestAggregateArgs>): Prisma.PrismaPromise<GetEssayRequestAggregateType<T>>

    /**
     * Group by EssayRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EssayRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EssayRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EssayRequestGroupByArgs['orderBy'] }
        : { orderBy?: EssayRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EssayRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEssayRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EssayRequest model
   */
  readonly fields: EssayRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EssayRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EssayRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentProfileDefaultArgs<ExtArgs>>): Prisma__StudentProfileClient<$Result.GetResult<Prisma.$StudentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EssayRequest model
   */
  interface EssayRequestFieldRefs {
    readonly id: FieldRef<"EssayRequest", 'String'>
    readonly studentId: FieldRef<"EssayRequest", 'String'>
    readonly prompt: FieldRef<"EssayRequest", 'String'>
    readonly essayText: FieldRef<"EssayRequest", 'String'>
    readonly aiFeedback: FieldRef<"EssayRequest", 'String'>
    readonly createdAt: FieldRef<"EssayRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EssayRequest findUnique
   */
  export type EssayRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestInclude<ExtArgs> | null
    /**
     * Filter, which EssayRequest to fetch.
     */
    where: EssayRequestWhereUniqueInput
  }

  /**
   * EssayRequest findUniqueOrThrow
   */
  export type EssayRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestInclude<ExtArgs> | null
    /**
     * Filter, which EssayRequest to fetch.
     */
    where: EssayRequestWhereUniqueInput
  }

  /**
   * EssayRequest findFirst
   */
  export type EssayRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestInclude<ExtArgs> | null
    /**
     * Filter, which EssayRequest to fetch.
     */
    where?: EssayRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EssayRequests to fetch.
     */
    orderBy?: EssayRequestOrderByWithRelationInput | EssayRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EssayRequests.
     */
    cursor?: EssayRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EssayRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EssayRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EssayRequests.
     */
    distinct?: EssayRequestScalarFieldEnum | EssayRequestScalarFieldEnum[]
  }

  /**
   * EssayRequest findFirstOrThrow
   */
  export type EssayRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestInclude<ExtArgs> | null
    /**
     * Filter, which EssayRequest to fetch.
     */
    where?: EssayRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EssayRequests to fetch.
     */
    orderBy?: EssayRequestOrderByWithRelationInput | EssayRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EssayRequests.
     */
    cursor?: EssayRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EssayRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EssayRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EssayRequests.
     */
    distinct?: EssayRequestScalarFieldEnum | EssayRequestScalarFieldEnum[]
  }

  /**
   * EssayRequest findMany
   */
  export type EssayRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestInclude<ExtArgs> | null
    /**
     * Filter, which EssayRequests to fetch.
     */
    where?: EssayRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EssayRequests to fetch.
     */
    orderBy?: EssayRequestOrderByWithRelationInput | EssayRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EssayRequests.
     */
    cursor?: EssayRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EssayRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EssayRequests.
     */
    skip?: number
    distinct?: EssayRequestScalarFieldEnum | EssayRequestScalarFieldEnum[]
  }

  /**
   * EssayRequest create
   */
  export type EssayRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a EssayRequest.
     */
    data: XOR<EssayRequestCreateInput, EssayRequestUncheckedCreateInput>
  }

  /**
   * EssayRequest createMany
   */
  export type EssayRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EssayRequests.
     */
    data: EssayRequestCreateManyInput | EssayRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EssayRequest createManyAndReturn
   */
  export type EssayRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * The data used to create many EssayRequests.
     */
    data: EssayRequestCreateManyInput | EssayRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EssayRequest update
   */
  export type EssayRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a EssayRequest.
     */
    data: XOR<EssayRequestUpdateInput, EssayRequestUncheckedUpdateInput>
    /**
     * Choose, which EssayRequest to update.
     */
    where: EssayRequestWhereUniqueInput
  }

  /**
   * EssayRequest updateMany
   */
  export type EssayRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EssayRequests.
     */
    data: XOR<EssayRequestUpdateManyMutationInput, EssayRequestUncheckedUpdateManyInput>
    /**
     * Filter which EssayRequests to update
     */
    where?: EssayRequestWhereInput
    /**
     * Limit how many EssayRequests to update.
     */
    limit?: number
  }

  /**
   * EssayRequest updateManyAndReturn
   */
  export type EssayRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * The data used to update EssayRequests.
     */
    data: XOR<EssayRequestUpdateManyMutationInput, EssayRequestUncheckedUpdateManyInput>
    /**
     * Filter which EssayRequests to update
     */
    where?: EssayRequestWhereInput
    /**
     * Limit how many EssayRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EssayRequest upsert
   */
  export type EssayRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the EssayRequest to update in case it exists.
     */
    where: EssayRequestWhereUniqueInput
    /**
     * In case the EssayRequest found by the `where` argument doesn't exist, create a new EssayRequest with this data.
     */
    create: XOR<EssayRequestCreateInput, EssayRequestUncheckedCreateInput>
    /**
     * In case the EssayRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EssayRequestUpdateInput, EssayRequestUncheckedUpdateInput>
  }

  /**
   * EssayRequest delete
   */
  export type EssayRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestInclude<ExtArgs> | null
    /**
     * Filter which EssayRequest to delete.
     */
    where: EssayRequestWhereUniqueInput
  }

  /**
   * EssayRequest deleteMany
   */
  export type EssayRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EssayRequests to delete
     */
    where?: EssayRequestWhereInput
    /**
     * Limit how many EssayRequests to delete.
     */
    limit?: number
  }

  /**
   * EssayRequest without action
   */
  export type EssayRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EssayRequest
     */
    select?: EssayRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EssayRequest
     */
    omit?: EssayRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EssayRequestInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StudentProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    firstName: 'firstName',
    lastName: 'lastName',
    gpa: 'gpa',
    majorInterest: 'majorInterest',
    state: 'state',
    country: 'country',
    gender: 'gender',
    ethnicity: 'ethnicity',
    financialNeed: 'financialNeed',
    firstGeneration: 'firstGeneration',
    activities: 'activities',
    createdAt: 'createdAt'
  };

  export type StudentProfileScalarFieldEnum = (typeof StudentProfileScalarFieldEnum)[keyof typeof StudentProfileScalarFieldEnum]


  export const ScholarshipScalarFieldEnum: {
    id: 'id',
    title: 'title',
    organization: 'organization',
    amount: 'amount',
    description: 'description',
    deadline: 'deadline',
    gpaMin: 'gpaMin',
    majorRequired: 'majorRequired',
    stateRequired: 'stateRequired',
    countryRequired: 'countryRequired',
    genderRequired: 'genderRequired',
    ethnicityRequired: 'ethnicityRequired',
    financialNeedRequired: 'financialNeedRequired',
    essayRequired: 'essayRequired',
    estimatedApplicants: 'estimatedApplicants',
    numberOfWinners: 'numberOfWinners',
    applicationUrl: 'applicationUrl',
    createdAt: 'createdAt'
  };

  export type ScholarshipScalarFieldEnum = (typeof ScholarshipScalarFieldEnum)[keyof typeof ScholarshipScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    scholarshipId: 'scholarshipId',
    matchScore: 'matchScore',
    winProbability: 'winProbability',
    saved: 'saved',
    applied: 'applied',
    createdAt: 'createdAt'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    scholarshipId: 'scholarshipId',
    status: 'status',
    submittedAt: 'submittedAt',
    notes: 'notes'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const EssayRequestScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    prompt: 'prompt',
    essayText: 'essayText',
    aiFeedback: 'aiFeedback',
    createdAt: 'createdAt'
  };

  export type EssayRequestScalarFieldEnum = (typeof EssayRequestScalarFieldEnum)[keyof typeof EssayRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    studentProfile?: StudentProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    studentProfile?: XOR<StudentProfileNullableScalarRelationFilter, StudentProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type StudentProfileWhereInput = {
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    id?: UuidFilter<"StudentProfile"> | string
    userId?: UuidFilter<"StudentProfile"> | string
    firstName?: StringFilter<"StudentProfile"> | string
    lastName?: StringFilter<"StudentProfile"> | string
    gpa?: FloatFilter<"StudentProfile"> | number
    majorInterest?: StringFilter<"StudentProfile"> | string
    state?: StringFilter<"StudentProfile"> | string
    country?: StringFilter<"StudentProfile"> | string
    gender?: StringNullableFilter<"StudentProfile"> | string | null
    ethnicity?: StringNullableFilter<"StudentProfile"> | string | null
    financialNeed?: BoolFilter<"StudentProfile"> | boolean
    firstGeneration?: BoolFilter<"StudentProfile"> | boolean
    activities?: StringNullableListFilter<"StudentProfile">
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    matches?: MatchListRelationFilter
    applications?: ApplicationListRelationFilter
    essayRequests?: EssayRequestListRelationFilter
  }

  export type StudentProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gpa?: SortOrder
    majorInterest?: SortOrder
    state?: SortOrder
    country?: SortOrder
    gender?: SortOrderInput | SortOrder
    ethnicity?: SortOrderInput | SortOrder
    financialNeed?: SortOrder
    firstGeneration?: SortOrder
    activities?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    matches?: MatchOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    essayRequests?: EssayRequestOrderByRelationAggregateInput
  }

  export type StudentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: StudentProfileWhereInput | StudentProfileWhereInput[]
    OR?: StudentProfileWhereInput[]
    NOT?: StudentProfileWhereInput | StudentProfileWhereInput[]
    firstName?: StringFilter<"StudentProfile"> | string
    lastName?: StringFilter<"StudentProfile"> | string
    gpa?: FloatFilter<"StudentProfile"> | number
    majorInterest?: StringFilter<"StudentProfile"> | string
    state?: StringFilter<"StudentProfile"> | string
    country?: StringFilter<"StudentProfile"> | string
    gender?: StringNullableFilter<"StudentProfile"> | string | null
    ethnicity?: StringNullableFilter<"StudentProfile"> | string | null
    financialNeed?: BoolFilter<"StudentProfile"> | boolean
    firstGeneration?: BoolFilter<"StudentProfile"> | boolean
    activities?: StringNullableListFilter<"StudentProfile">
    createdAt?: DateTimeFilter<"StudentProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    matches?: MatchListRelationFilter
    applications?: ApplicationListRelationFilter
    essayRequests?: EssayRequestListRelationFilter
  }, "id" | "userId">

  export type StudentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gpa?: SortOrder
    majorInterest?: SortOrder
    state?: SortOrder
    country?: SortOrder
    gender?: SortOrderInput | SortOrder
    ethnicity?: SortOrderInput | SortOrder
    financialNeed?: SortOrder
    firstGeneration?: SortOrder
    activities?: SortOrder
    createdAt?: SortOrder
    _count?: StudentProfileCountOrderByAggregateInput
    _avg?: StudentProfileAvgOrderByAggregateInput
    _max?: StudentProfileMaxOrderByAggregateInput
    _min?: StudentProfileMinOrderByAggregateInput
    _sum?: StudentProfileSumOrderByAggregateInput
  }

  export type StudentProfileScalarWhereWithAggregatesInput = {
    AND?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    OR?: StudentProfileScalarWhereWithAggregatesInput[]
    NOT?: StudentProfileScalarWhereWithAggregatesInput | StudentProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"StudentProfile"> | string
    userId?: UuidWithAggregatesFilter<"StudentProfile"> | string
    firstName?: StringWithAggregatesFilter<"StudentProfile"> | string
    lastName?: StringWithAggregatesFilter<"StudentProfile"> | string
    gpa?: FloatWithAggregatesFilter<"StudentProfile"> | number
    majorInterest?: StringWithAggregatesFilter<"StudentProfile"> | string
    state?: StringWithAggregatesFilter<"StudentProfile"> | string
    country?: StringWithAggregatesFilter<"StudentProfile"> | string
    gender?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    ethnicity?: StringNullableWithAggregatesFilter<"StudentProfile"> | string | null
    financialNeed?: BoolWithAggregatesFilter<"StudentProfile"> | boolean
    firstGeneration?: BoolWithAggregatesFilter<"StudentProfile"> | boolean
    activities?: StringNullableListFilter<"StudentProfile">
    createdAt?: DateTimeWithAggregatesFilter<"StudentProfile"> | Date | string
  }

  export type ScholarshipWhereInput = {
    AND?: ScholarshipWhereInput | ScholarshipWhereInput[]
    OR?: ScholarshipWhereInput[]
    NOT?: ScholarshipWhereInput | ScholarshipWhereInput[]
    id?: UuidFilter<"Scholarship"> | string
    title?: StringFilter<"Scholarship"> | string
    organization?: StringFilter<"Scholarship"> | string
    amount?: IntFilter<"Scholarship"> | number
    description?: StringFilter<"Scholarship"> | string
    deadline?: DateTimeFilter<"Scholarship"> | Date | string
    gpaMin?: FloatNullableFilter<"Scholarship"> | number | null
    majorRequired?: StringNullableFilter<"Scholarship"> | string | null
    stateRequired?: StringNullableFilter<"Scholarship"> | string | null
    countryRequired?: StringNullableFilter<"Scholarship"> | string | null
    genderRequired?: StringNullableFilter<"Scholarship"> | string | null
    ethnicityRequired?: StringNullableFilter<"Scholarship"> | string | null
    financialNeedRequired?: BoolFilter<"Scholarship"> | boolean
    essayRequired?: BoolFilter<"Scholarship"> | boolean
    estimatedApplicants?: IntFilter<"Scholarship"> | number
    numberOfWinners?: IntFilter<"Scholarship"> | number
    applicationUrl?: StringFilter<"Scholarship"> | string
    createdAt?: DateTimeFilter<"Scholarship"> | Date | string
    matches?: MatchListRelationFilter
    applications?: ApplicationListRelationFilter
  }

  export type ScholarshipOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    organization?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    gpaMin?: SortOrderInput | SortOrder
    majorRequired?: SortOrderInput | SortOrder
    stateRequired?: SortOrderInput | SortOrder
    countryRequired?: SortOrderInput | SortOrder
    genderRequired?: SortOrderInput | SortOrder
    ethnicityRequired?: SortOrderInput | SortOrder
    financialNeedRequired?: SortOrder
    essayRequired?: SortOrder
    estimatedApplicants?: SortOrder
    numberOfWinners?: SortOrder
    applicationUrl?: SortOrder
    createdAt?: SortOrder
    matches?: MatchOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
  }

  export type ScholarshipWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title_organization?: ScholarshipTitleOrganizationCompoundUniqueInput
    AND?: ScholarshipWhereInput | ScholarshipWhereInput[]
    OR?: ScholarshipWhereInput[]
    NOT?: ScholarshipWhereInput | ScholarshipWhereInput[]
    title?: StringFilter<"Scholarship"> | string
    organization?: StringFilter<"Scholarship"> | string
    amount?: IntFilter<"Scholarship"> | number
    description?: StringFilter<"Scholarship"> | string
    deadline?: DateTimeFilter<"Scholarship"> | Date | string
    gpaMin?: FloatNullableFilter<"Scholarship"> | number | null
    majorRequired?: StringNullableFilter<"Scholarship"> | string | null
    stateRequired?: StringNullableFilter<"Scholarship"> | string | null
    countryRequired?: StringNullableFilter<"Scholarship"> | string | null
    genderRequired?: StringNullableFilter<"Scholarship"> | string | null
    ethnicityRequired?: StringNullableFilter<"Scholarship"> | string | null
    financialNeedRequired?: BoolFilter<"Scholarship"> | boolean
    essayRequired?: BoolFilter<"Scholarship"> | boolean
    estimatedApplicants?: IntFilter<"Scholarship"> | number
    numberOfWinners?: IntFilter<"Scholarship"> | number
    applicationUrl?: StringFilter<"Scholarship"> | string
    createdAt?: DateTimeFilter<"Scholarship"> | Date | string
    matches?: MatchListRelationFilter
    applications?: ApplicationListRelationFilter
  }, "id" | "title_organization">

  export type ScholarshipOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    organization?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    gpaMin?: SortOrderInput | SortOrder
    majorRequired?: SortOrderInput | SortOrder
    stateRequired?: SortOrderInput | SortOrder
    countryRequired?: SortOrderInput | SortOrder
    genderRequired?: SortOrderInput | SortOrder
    ethnicityRequired?: SortOrderInput | SortOrder
    financialNeedRequired?: SortOrder
    essayRequired?: SortOrder
    estimatedApplicants?: SortOrder
    numberOfWinners?: SortOrder
    applicationUrl?: SortOrder
    createdAt?: SortOrder
    _count?: ScholarshipCountOrderByAggregateInput
    _avg?: ScholarshipAvgOrderByAggregateInput
    _max?: ScholarshipMaxOrderByAggregateInput
    _min?: ScholarshipMinOrderByAggregateInput
    _sum?: ScholarshipSumOrderByAggregateInput
  }

  export type ScholarshipScalarWhereWithAggregatesInput = {
    AND?: ScholarshipScalarWhereWithAggregatesInput | ScholarshipScalarWhereWithAggregatesInput[]
    OR?: ScholarshipScalarWhereWithAggregatesInput[]
    NOT?: ScholarshipScalarWhereWithAggregatesInput | ScholarshipScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Scholarship"> | string
    title?: StringWithAggregatesFilter<"Scholarship"> | string
    organization?: StringWithAggregatesFilter<"Scholarship"> | string
    amount?: IntWithAggregatesFilter<"Scholarship"> | number
    description?: StringWithAggregatesFilter<"Scholarship"> | string
    deadline?: DateTimeWithAggregatesFilter<"Scholarship"> | Date | string
    gpaMin?: FloatNullableWithAggregatesFilter<"Scholarship"> | number | null
    majorRequired?: StringNullableWithAggregatesFilter<"Scholarship"> | string | null
    stateRequired?: StringNullableWithAggregatesFilter<"Scholarship"> | string | null
    countryRequired?: StringNullableWithAggregatesFilter<"Scholarship"> | string | null
    genderRequired?: StringNullableWithAggregatesFilter<"Scholarship"> | string | null
    ethnicityRequired?: StringNullableWithAggregatesFilter<"Scholarship"> | string | null
    financialNeedRequired?: BoolWithAggregatesFilter<"Scholarship"> | boolean
    essayRequired?: BoolWithAggregatesFilter<"Scholarship"> | boolean
    estimatedApplicants?: IntWithAggregatesFilter<"Scholarship"> | number
    numberOfWinners?: IntWithAggregatesFilter<"Scholarship"> | number
    applicationUrl?: StringWithAggregatesFilter<"Scholarship"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Scholarship"> | Date | string
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: UuidFilter<"Match"> | string
    studentId?: UuidFilter<"Match"> | string
    scholarshipId?: UuidFilter<"Match"> | string
    matchScore?: IntFilter<"Match"> | number
    winProbability?: FloatFilter<"Match"> | number
    saved?: BoolFilter<"Match"> | boolean
    applied?: BoolFilter<"Match"> | boolean
    createdAt?: DateTimeFilter<"Match"> | Date | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    scholarship?: XOR<ScholarshipScalarRelationFilter, ScholarshipWhereInput>
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    scholarshipId?: SortOrder
    matchScore?: SortOrder
    winProbability?: SortOrder
    saved?: SortOrder
    applied?: SortOrder
    createdAt?: SortOrder
    student?: StudentProfileOrderByWithRelationInput
    scholarship?: ScholarshipOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_scholarshipId?: MatchStudentIdScholarshipIdCompoundUniqueInput
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    studentId?: UuidFilter<"Match"> | string
    scholarshipId?: UuidFilter<"Match"> | string
    matchScore?: IntFilter<"Match"> | number
    winProbability?: FloatFilter<"Match"> | number
    saved?: BoolFilter<"Match"> | boolean
    applied?: BoolFilter<"Match"> | boolean
    createdAt?: DateTimeFilter<"Match"> | Date | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    scholarship?: XOR<ScholarshipScalarRelationFilter, ScholarshipWhereInput>
  }, "id" | "studentId_scholarshipId">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    scholarshipId?: SortOrder
    matchScore?: SortOrder
    winProbability?: SortOrder
    saved?: SortOrder
    applied?: SortOrder
    createdAt?: SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Match"> | string
    studentId?: UuidWithAggregatesFilter<"Match"> | string
    scholarshipId?: UuidWithAggregatesFilter<"Match"> | string
    matchScore?: IntWithAggregatesFilter<"Match"> | number
    winProbability?: FloatWithAggregatesFilter<"Match"> | number
    saved?: BoolWithAggregatesFilter<"Match"> | boolean
    applied?: BoolWithAggregatesFilter<"Match"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: UuidFilter<"Application"> | string
    studentId?: UuidFilter<"Application"> | string
    scholarshipId?: UuidFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    submittedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
    notes?: StringNullableFilter<"Application"> | string | null
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    scholarship?: XOR<ScholarshipScalarRelationFilter, ScholarshipWhereInput>
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    scholarshipId?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    student?: StudentProfileOrderByWithRelationInput
    scholarship?: ScholarshipOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_scholarshipId?: ApplicationStudentIdScholarshipIdCompoundUniqueInput
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    studentId?: UuidFilter<"Application"> | string
    scholarshipId?: UuidFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    submittedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
    notes?: StringNullableFilter<"Application"> | string | null
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
    scholarship?: XOR<ScholarshipScalarRelationFilter, ScholarshipWhereInput>
  }, "id" | "studentId_scholarshipId">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    scholarshipId?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Application"> | string
    studentId?: UuidWithAggregatesFilter<"Application"> | string
    scholarshipId?: UuidWithAggregatesFilter<"Application"> | string
    status?: StringWithAggregatesFilter<"Application"> | string
    submittedAt?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Application"> | string | null
  }

  export type EssayRequestWhereInput = {
    AND?: EssayRequestWhereInput | EssayRequestWhereInput[]
    OR?: EssayRequestWhereInput[]
    NOT?: EssayRequestWhereInput | EssayRequestWhereInput[]
    id?: UuidFilter<"EssayRequest"> | string
    studentId?: UuidFilter<"EssayRequest"> | string
    prompt?: StringFilter<"EssayRequest"> | string
    essayText?: StringFilter<"EssayRequest"> | string
    aiFeedback?: StringFilter<"EssayRequest"> | string
    createdAt?: DateTimeFilter<"EssayRequest"> | Date | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }

  export type EssayRequestOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    prompt?: SortOrder
    essayText?: SortOrder
    aiFeedback?: SortOrder
    createdAt?: SortOrder
    student?: StudentProfileOrderByWithRelationInput
  }

  export type EssayRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EssayRequestWhereInput | EssayRequestWhereInput[]
    OR?: EssayRequestWhereInput[]
    NOT?: EssayRequestWhereInput | EssayRequestWhereInput[]
    studentId?: UuidFilter<"EssayRequest"> | string
    prompt?: StringFilter<"EssayRequest"> | string
    essayText?: StringFilter<"EssayRequest"> | string
    aiFeedback?: StringFilter<"EssayRequest"> | string
    createdAt?: DateTimeFilter<"EssayRequest"> | Date | string
    student?: XOR<StudentProfileScalarRelationFilter, StudentProfileWhereInput>
  }, "id">

  export type EssayRequestOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    prompt?: SortOrder
    essayText?: SortOrder
    aiFeedback?: SortOrder
    createdAt?: SortOrder
    _count?: EssayRequestCountOrderByAggregateInput
    _max?: EssayRequestMaxOrderByAggregateInput
    _min?: EssayRequestMinOrderByAggregateInput
  }

  export type EssayRequestScalarWhereWithAggregatesInput = {
    AND?: EssayRequestScalarWhereWithAggregatesInput | EssayRequestScalarWhereWithAggregatesInput[]
    OR?: EssayRequestScalarWhereWithAggregatesInput[]
    NOT?: EssayRequestScalarWhereWithAggregatesInput | EssayRequestScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"EssayRequest"> | string
    studentId?: UuidWithAggregatesFilter<"EssayRequest"> | string
    prompt?: StringWithAggregatesFilter<"EssayRequest"> | string
    essayText?: StringWithAggregatesFilter<"EssayRequest"> | string
    aiFeedback?: StringWithAggregatesFilter<"EssayRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EssayRequest"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    studentProfile?: StudentProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
    studentProfile?: StudentProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: StudentProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentProfile?: StudentProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileCreateInput = {
    id?: string
    firstName: string
    lastName: string
    gpa: number
    majorInterest: string
    state: string
    country: string
    gender?: string | null
    ethnicity?: string | null
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: StudentProfileCreateactivitiesInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStudentProfileInput
    matches?: MatchCreateNestedManyWithoutStudentInput
    applications?: ApplicationCreateNestedManyWithoutStudentInput
    essayRequests?: EssayRequestCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    gpa: number
    majorInterest: string
    state: string
    country: string
    gender?: string | null
    ethnicity?: string | null
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: StudentProfileCreateactivitiesInput | string[]
    createdAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutStudentInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
    essayRequests?: EssayRequestUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    majorInterest?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeed?: BoolFieldUpdateOperationsInput | boolean
    firstGeneration?: BoolFieldUpdateOperationsInput | boolean
    activities?: StudentProfileUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    matches?: MatchUpdateManyWithoutStudentNestedInput
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
    essayRequests?: EssayRequestUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    majorInterest?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeed?: BoolFieldUpdateOperationsInput | boolean
    firstGeneration?: BoolFieldUpdateOperationsInput | boolean
    activities?: StudentProfileUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutStudentNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
    essayRequests?: EssayRequestUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileCreateManyInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    gpa: number
    majorInterest: string
    state: string
    country: string
    gender?: string | null
    ethnicity?: string | null
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: StudentProfileCreateactivitiesInput | string[]
    createdAt?: Date | string
  }

  export type StudentProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    majorInterest?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeed?: BoolFieldUpdateOperationsInput | boolean
    firstGeneration?: BoolFieldUpdateOperationsInput | boolean
    activities?: StudentProfileUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    majorInterest?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeed?: BoolFieldUpdateOperationsInput | boolean
    firstGeneration?: BoolFieldUpdateOperationsInput | boolean
    activities?: StudentProfileUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScholarshipCreateInput = {
    id?: string
    title: string
    organization: string
    amount: number
    description: string
    deadline: Date | string
    gpaMin?: number | null
    majorRequired?: string | null
    stateRequired?: string | null
    countryRequired?: string | null
    genderRequired?: string | null
    ethnicityRequired?: string | null
    financialNeedRequired?: boolean
    essayRequired?: boolean
    estimatedApplicants?: number
    numberOfWinners?: number
    applicationUrl: string
    createdAt?: Date | string
    matches?: MatchCreateNestedManyWithoutScholarshipInput
    applications?: ApplicationCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipUncheckedCreateInput = {
    id?: string
    title: string
    organization: string
    amount: number
    description: string
    deadline: Date | string
    gpaMin?: number | null
    majorRequired?: string | null
    stateRequired?: string | null
    countryRequired?: string | null
    genderRequired?: string | null
    ethnicityRequired?: string | null
    financialNeedRequired?: boolean
    essayRequired?: boolean
    estimatedApplicants?: number
    numberOfWinners?: number
    applicationUrl: string
    createdAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutScholarshipInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    gpaMin?: NullableFloatFieldUpdateOperationsInput | number | null
    majorRequired?: NullableStringFieldUpdateOperationsInput | string | null
    stateRequired?: NullableStringFieldUpdateOperationsInput | string | null
    countryRequired?: NullableStringFieldUpdateOperationsInput | string | null
    genderRequired?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicityRequired?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeedRequired?: BoolFieldUpdateOperationsInput | boolean
    essayRequired?: BoolFieldUpdateOperationsInput | boolean
    estimatedApplicants?: IntFieldUpdateOperationsInput | number
    numberOfWinners?: IntFieldUpdateOperationsInput | number
    applicationUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUpdateManyWithoutScholarshipNestedInput
    applications?: ApplicationUpdateManyWithoutScholarshipNestedInput
  }

  export type ScholarshipUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    gpaMin?: NullableFloatFieldUpdateOperationsInput | number | null
    majorRequired?: NullableStringFieldUpdateOperationsInput | string | null
    stateRequired?: NullableStringFieldUpdateOperationsInput | string | null
    countryRequired?: NullableStringFieldUpdateOperationsInput | string | null
    genderRequired?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicityRequired?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeedRequired?: BoolFieldUpdateOperationsInput | boolean
    essayRequired?: BoolFieldUpdateOperationsInput | boolean
    estimatedApplicants?: IntFieldUpdateOperationsInput | number
    numberOfWinners?: IntFieldUpdateOperationsInput | number
    applicationUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutScholarshipNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutScholarshipNestedInput
  }

  export type ScholarshipCreateManyInput = {
    id?: string
    title: string
    organization: string
    amount: number
    description: string
    deadline: Date | string
    gpaMin?: number | null
    majorRequired?: string | null
    stateRequired?: string | null
    countryRequired?: string | null
    genderRequired?: string | null
    ethnicityRequired?: string | null
    financialNeedRequired?: boolean
    essayRequired?: boolean
    estimatedApplicants?: number
    numberOfWinners?: number
    applicationUrl: string
    createdAt?: Date | string
  }

  export type ScholarshipUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    gpaMin?: NullableFloatFieldUpdateOperationsInput | number | null
    majorRequired?: NullableStringFieldUpdateOperationsInput | string | null
    stateRequired?: NullableStringFieldUpdateOperationsInput | string | null
    countryRequired?: NullableStringFieldUpdateOperationsInput | string | null
    genderRequired?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicityRequired?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeedRequired?: BoolFieldUpdateOperationsInput | boolean
    essayRequired?: BoolFieldUpdateOperationsInput | boolean
    estimatedApplicants?: IntFieldUpdateOperationsInput | number
    numberOfWinners?: IntFieldUpdateOperationsInput | number
    applicationUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScholarshipUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    gpaMin?: NullableFloatFieldUpdateOperationsInput | number | null
    majorRequired?: NullableStringFieldUpdateOperationsInput | string | null
    stateRequired?: NullableStringFieldUpdateOperationsInput | string | null
    countryRequired?: NullableStringFieldUpdateOperationsInput | string | null
    genderRequired?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicityRequired?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeedRequired?: BoolFieldUpdateOperationsInput | boolean
    essayRequired?: BoolFieldUpdateOperationsInput | boolean
    estimatedApplicants?: IntFieldUpdateOperationsInput | number
    numberOfWinners?: IntFieldUpdateOperationsInput | number
    applicationUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateInput = {
    id?: string
    matchScore: number
    winProbability: number
    saved?: boolean
    applied?: boolean
    createdAt?: Date | string
    student: StudentProfileCreateNestedOneWithoutMatchesInput
    scholarship: ScholarshipCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    studentId: string
    scholarshipId: string
    matchScore: number
    winProbability: number
    saved?: boolean
    applied?: boolean
    createdAt?: Date | string
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    winProbability?: FloatFieldUpdateOperationsInput | number
    saved?: BoolFieldUpdateOperationsInput | boolean
    applied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentProfileUpdateOneRequiredWithoutMatchesNestedInput
    scholarship?: ScholarshipUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    scholarshipId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    winProbability?: FloatFieldUpdateOperationsInput | number
    saved?: BoolFieldUpdateOperationsInput | boolean
    applied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyInput = {
    id?: string
    studentId: string
    scholarshipId: string
    matchScore: number
    winProbability: number
    saved?: boolean
    applied?: boolean
    createdAt?: Date | string
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    winProbability?: FloatFieldUpdateOperationsInput | number
    saved?: BoolFieldUpdateOperationsInput | boolean
    applied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    scholarshipId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    winProbability?: FloatFieldUpdateOperationsInput | number
    saved?: BoolFieldUpdateOperationsInput | boolean
    applied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    status: string
    submittedAt?: Date | string | null
    notes?: string | null
    student: StudentProfileCreateNestedOneWithoutApplicationsInput
    scholarship: ScholarshipCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    studentId: string
    scholarshipId: string
    status: string
    submittedAt?: Date | string | null
    notes?: string | null
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentProfileUpdateOneRequiredWithoutApplicationsNestedInput
    scholarship?: ScholarshipUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    scholarshipId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationCreateManyInput = {
    id?: string
    studentId: string
    scholarshipId: string
    status: string
    submittedAt?: Date | string | null
    notes?: string | null
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    scholarshipId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EssayRequestCreateInput = {
    id?: string
    prompt: string
    essayText: string
    aiFeedback: string
    createdAt?: Date | string
    student: StudentProfileCreateNestedOneWithoutEssayRequestsInput
  }

  export type EssayRequestUncheckedCreateInput = {
    id?: string
    studentId: string
    prompt: string
    essayText: string
    aiFeedback: string
    createdAt?: Date | string
  }

  export type EssayRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    essayText?: StringFieldUpdateOperationsInput | string
    aiFeedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentProfileUpdateOneRequiredWithoutEssayRequestsNestedInput
  }

  export type EssayRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    essayText?: StringFieldUpdateOperationsInput | string
    aiFeedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EssayRequestCreateManyInput = {
    id?: string
    studentId: string
    prompt: string
    essayText: string
    aiFeedback: string
    createdAt?: Date | string
  }

  export type EssayRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    essayText?: StringFieldUpdateOperationsInput | string
    aiFeedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EssayRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    essayText?: StringFieldUpdateOperationsInput | string
    aiFeedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentProfileNullableScalarRelationFilter = {
    is?: StudentProfileWhereInput | null
    isNot?: StudentProfileWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MatchListRelationFilter = {
    every?: MatchWhereInput
    some?: MatchWhereInput
    none?: MatchWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type EssayRequestListRelationFilter = {
    every?: EssayRequestWhereInput
    some?: EssayRequestWhereInput
    none?: EssayRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EssayRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gpa?: SortOrder
    majorInterest?: SortOrder
    state?: SortOrder
    country?: SortOrder
    gender?: SortOrder
    ethnicity?: SortOrder
    financialNeed?: SortOrder
    firstGeneration?: SortOrder
    activities?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentProfileAvgOrderByAggregateInput = {
    gpa?: SortOrder
  }

  export type StudentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gpa?: SortOrder
    majorInterest?: SortOrder
    state?: SortOrder
    country?: SortOrder
    gender?: SortOrder
    ethnicity?: SortOrder
    financialNeed?: SortOrder
    firstGeneration?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    gpa?: SortOrder
    majorInterest?: SortOrder
    state?: SortOrder
    country?: SortOrder
    gender?: SortOrder
    ethnicity?: SortOrder
    financialNeed?: SortOrder
    firstGeneration?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentProfileSumOrderByAggregateInput = {
    gpa?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ScholarshipTitleOrganizationCompoundUniqueInput = {
    title: string
    organization: string
  }

  export type ScholarshipCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    organization?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    gpaMin?: SortOrder
    majorRequired?: SortOrder
    stateRequired?: SortOrder
    countryRequired?: SortOrder
    genderRequired?: SortOrder
    ethnicityRequired?: SortOrder
    financialNeedRequired?: SortOrder
    essayRequired?: SortOrder
    estimatedApplicants?: SortOrder
    numberOfWinners?: SortOrder
    applicationUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ScholarshipAvgOrderByAggregateInput = {
    amount?: SortOrder
    gpaMin?: SortOrder
    estimatedApplicants?: SortOrder
    numberOfWinners?: SortOrder
  }

  export type ScholarshipMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    organization?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    gpaMin?: SortOrder
    majorRequired?: SortOrder
    stateRequired?: SortOrder
    countryRequired?: SortOrder
    genderRequired?: SortOrder
    ethnicityRequired?: SortOrder
    financialNeedRequired?: SortOrder
    essayRequired?: SortOrder
    estimatedApplicants?: SortOrder
    numberOfWinners?: SortOrder
    applicationUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ScholarshipMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    organization?: SortOrder
    amount?: SortOrder
    description?: SortOrder
    deadline?: SortOrder
    gpaMin?: SortOrder
    majorRequired?: SortOrder
    stateRequired?: SortOrder
    countryRequired?: SortOrder
    genderRequired?: SortOrder
    ethnicityRequired?: SortOrder
    financialNeedRequired?: SortOrder
    essayRequired?: SortOrder
    estimatedApplicants?: SortOrder
    numberOfWinners?: SortOrder
    applicationUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ScholarshipSumOrderByAggregateInput = {
    amount?: SortOrder
    gpaMin?: SortOrder
    estimatedApplicants?: SortOrder
    numberOfWinners?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StudentProfileScalarRelationFilter = {
    is?: StudentProfileWhereInput
    isNot?: StudentProfileWhereInput
  }

  export type ScholarshipScalarRelationFilter = {
    is?: ScholarshipWhereInput
    isNot?: ScholarshipWhereInput
  }

  export type MatchStudentIdScholarshipIdCompoundUniqueInput = {
    studentId: string
    scholarshipId: string
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    scholarshipId?: SortOrder
    matchScore?: SortOrder
    winProbability?: SortOrder
    saved?: SortOrder
    applied?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    matchScore?: SortOrder
    winProbability?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    scholarshipId?: SortOrder
    matchScore?: SortOrder
    winProbability?: SortOrder
    saved?: SortOrder
    applied?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    scholarshipId?: SortOrder
    matchScore?: SortOrder
    winProbability?: SortOrder
    saved?: SortOrder
    applied?: SortOrder
    createdAt?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    matchScore?: SortOrder
    winProbability?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ApplicationStudentIdScholarshipIdCompoundUniqueInput = {
    studentId: string
    scholarshipId: string
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    scholarshipId?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    notes?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    scholarshipId?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    notes?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    scholarshipId?: SortOrder
    status?: SortOrder
    submittedAt?: SortOrder
    notes?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EssayRequestCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    prompt?: SortOrder
    essayText?: SortOrder
    aiFeedback?: SortOrder
    createdAt?: SortOrder
  }

  export type EssayRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    prompt?: SortOrder
    essayText?: SortOrder
    aiFeedback?: SortOrder
    createdAt?: SortOrder
  }

  export type EssayRequestMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    prompt?: SortOrder
    essayText?: SortOrder
    aiFeedback?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type StudentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutUserInput
    upsert?: StudentProfileUpsertWithoutUserInput
    disconnect?: StudentProfileWhereInput | boolean
    delete?: StudentProfileWhereInput | boolean
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutUserInput, StudentProfileUpdateWithoutUserInput>, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileCreateactivitiesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutStudentProfileInput = {
    create?: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput
    connect?: UserWhereUniqueInput
  }

  export type MatchCreateNestedManyWithoutStudentInput = {
    create?: XOR<MatchCreateWithoutStudentInput, MatchUncheckedCreateWithoutStudentInput> | MatchCreateWithoutStudentInput[] | MatchUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutStudentInput | MatchCreateOrConnectWithoutStudentInput[]
    createMany?: MatchCreateManyStudentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutStudentInput = {
    create?: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput> | ApplicationCreateWithoutStudentInput[] | ApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutStudentInput | ApplicationCreateOrConnectWithoutStudentInput[]
    createMany?: ApplicationCreateManyStudentInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type EssayRequestCreateNestedManyWithoutStudentInput = {
    create?: XOR<EssayRequestCreateWithoutStudentInput, EssayRequestUncheckedCreateWithoutStudentInput> | EssayRequestCreateWithoutStudentInput[] | EssayRequestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EssayRequestCreateOrConnectWithoutStudentInput | EssayRequestCreateOrConnectWithoutStudentInput[]
    createMany?: EssayRequestCreateManyStudentInputEnvelope
    connect?: EssayRequestWhereUniqueInput | EssayRequestWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<MatchCreateWithoutStudentInput, MatchUncheckedCreateWithoutStudentInput> | MatchCreateWithoutStudentInput[] | MatchUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutStudentInput | MatchCreateOrConnectWithoutStudentInput[]
    createMany?: MatchCreateManyStudentInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput> | ApplicationCreateWithoutStudentInput[] | ApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutStudentInput | ApplicationCreateOrConnectWithoutStudentInput[]
    createMany?: ApplicationCreateManyStudentInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type EssayRequestUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EssayRequestCreateWithoutStudentInput, EssayRequestUncheckedCreateWithoutStudentInput> | EssayRequestCreateWithoutStudentInput[] | EssayRequestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EssayRequestCreateOrConnectWithoutStudentInput | EssayRequestCreateOrConnectWithoutStudentInput[]
    createMany?: EssayRequestCreateManyStudentInputEnvelope
    connect?: EssayRequestWhereUniqueInput | EssayRequestWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StudentProfileUpdateactivitiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutStudentProfileNestedInput = {
    create?: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudentProfileInput
    upsert?: UserUpsertWithoutStudentProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudentProfileInput, UserUpdateWithoutStudentProfileInput>, UserUncheckedUpdateWithoutStudentProfileInput>
  }

  export type MatchUpdateManyWithoutStudentNestedInput = {
    create?: XOR<MatchCreateWithoutStudentInput, MatchUncheckedCreateWithoutStudentInput> | MatchCreateWithoutStudentInput[] | MatchUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutStudentInput | MatchCreateOrConnectWithoutStudentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutStudentInput | MatchUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: MatchCreateManyStudentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutStudentInput | MatchUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutStudentInput | MatchUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput> | ApplicationCreateWithoutStudentInput[] | ApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutStudentInput | ApplicationCreateOrConnectWithoutStudentInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutStudentInput | ApplicationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ApplicationCreateManyStudentInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutStudentInput | ApplicationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutStudentInput | ApplicationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type EssayRequestUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EssayRequestCreateWithoutStudentInput, EssayRequestUncheckedCreateWithoutStudentInput> | EssayRequestCreateWithoutStudentInput[] | EssayRequestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EssayRequestCreateOrConnectWithoutStudentInput | EssayRequestCreateOrConnectWithoutStudentInput[]
    upsert?: EssayRequestUpsertWithWhereUniqueWithoutStudentInput | EssayRequestUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EssayRequestCreateManyStudentInputEnvelope
    set?: EssayRequestWhereUniqueInput | EssayRequestWhereUniqueInput[]
    disconnect?: EssayRequestWhereUniqueInput | EssayRequestWhereUniqueInput[]
    delete?: EssayRequestWhereUniqueInput | EssayRequestWhereUniqueInput[]
    connect?: EssayRequestWhereUniqueInput | EssayRequestWhereUniqueInput[]
    update?: EssayRequestUpdateWithWhereUniqueWithoutStudentInput | EssayRequestUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EssayRequestUpdateManyWithWhereWithoutStudentInput | EssayRequestUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EssayRequestScalarWhereInput | EssayRequestScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<MatchCreateWithoutStudentInput, MatchUncheckedCreateWithoutStudentInput> | MatchCreateWithoutStudentInput[] | MatchUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutStudentInput | MatchCreateOrConnectWithoutStudentInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutStudentInput | MatchUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: MatchCreateManyStudentInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutStudentInput | MatchUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutStudentInput | MatchUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput> | ApplicationCreateWithoutStudentInput[] | ApplicationUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutStudentInput | ApplicationCreateOrConnectWithoutStudentInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutStudentInput | ApplicationUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ApplicationCreateManyStudentInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutStudentInput | ApplicationUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutStudentInput | ApplicationUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type EssayRequestUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EssayRequestCreateWithoutStudentInput, EssayRequestUncheckedCreateWithoutStudentInput> | EssayRequestCreateWithoutStudentInput[] | EssayRequestUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EssayRequestCreateOrConnectWithoutStudentInput | EssayRequestCreateOrConnectWithoutStudentInput[]
    upsert?: EssayRequestUpsertWithWhereUniqueWithoutStudentInput | EssayRequestUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EssayRequestCreateManyStudentInputEnvelope
    set?: EssayRequestWhereUniqueInput | EssayRequestWhereUniqueInput[]
    disconnect?: EssayRequestWhereUniqueInput | EssayRequestWhereUniqueInput[]
    delete?: EssayRequestWhereUniqueInput | EssayRequestWhereUniqueInput[]
    connect?: EssayRequestWhereUniqueInput | EssayRequestWhereUniqueInput[]
    update?: EssayRequestUpdateWithWhereUniqueWithoutStudentInput | EssayRequestUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EssayRequestUpdateManyWithWhereWithoutStudentInput | EssayRequestUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EssayRequestScalarWhereInput | EssayRequestScalarWhereInput[]
  }

  export type MatchCreateNestedManyWithoutScholarshipInput = {
    create?: XOR<MatchCreateWithoutScholarshipInput, MatchUncheckedCreateWithoutScholarshipInput> | MatchCreateWithoutScholarshipInput[] | MatchUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutScholarshipInput | MatchCreateOrConnectWithoutScholarshipInput[]
    createMany?: MatchCreateManyScholarshipInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutScholarshipInput = {
    create?: XOR<ApplicationCreateWithoutScholarshipInput, ApplicationUncheckedCreateWithoutScholarshipInput> | ApplicationCreateWithoutScholarshipInput[] | ApplicationUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutScholarshipInput | ApplicationCreateOrConnectWithoutScholarshipInput[]
    createMany?: ApplicationCreateManyScholarshipInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type MatchUncheckedCreateNestedManyWithoutScholarshipInput = {
    create?: XOR<MatchCreateWithoutScholarshipInput, MatchUncheckedCreateWithoutScholarshipInput> | MatchCreateWithoutScholarshipInput[] | MatchUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutScholarshipInput | MatchCreateOrConnectWithoutScholarshipInput[]
    createMany?: MatchCreateManyScholarshipInputEnvelope
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutScholarshipInput = {
    create?: XOR<ApplicationCreateWithoutScholarshipInput, ApplicationUncheckedCreateWithoutScholarshipInput> | ApplicationCreateWithoutScholarshipInput[] | ApplicationUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutScholarshipInput | ApplicationCreateOrConnectWithoutScholarshipInput[]
    createMany?: ApplicationCreateManyScholarshipInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MatchUpdateManyWithoutScholarshipNestedInput = {
    create?: XOR<MatchCreateWithoutScholarshipInput, MatchUncheckedCreateWithoutScholarshipInput> | MatchCreateWithoutScholarshipInput[] | MatchUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutScholarshipInput | MatchCreateOrConnectWithoutScholarshipInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutScholarshipInput | MatchUpsertWithWhereUniqueWithoutScholarshipInput[]
    createMany?: MatchCreateManyScholarshipInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutScholarshipInput | MatchUpdateWithWhereUniqueWithoutScholarshipInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutScholarshipInput | MatchUpdateManyWithWhereWithoutScholarshipInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutScholarshipNestedInput = {
    create?: XOR<ApplicationCreateWithoutScholarshipInput, ApplicationUncheckedCreateWithoutScholarshipInput> | ApplicationCreateWithoutScholarshipInput[] | ApplicationUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutScholarshipInput | ApplicationCreateOrConnectWithoutScholarshipInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutScholarshipInput | ApplicationUpsertWithWhereUniqueWithoutScholarshipInput[]
    createMany?: ApplicationCreateManyScholarshipInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutScholarshipInput | ApplicationUpdateWithWhereUniqueWithoutScholarshipInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutScholarshipInput | ApplicationUpdateManyWithWhereWithoutScholarshipInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type MatchUncheckedUpdateManyWithoutScholarshipNestedInput = {
    create?: XOR<MatchCreateWithoutScholarshipInput, MatchUncheckedCreateWithoutScholarshipInput> | MatchCreateWithoutScholarshipInput[] | MatchUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: MatchCreateOrConnectWithoutScholarshipInput | MatchCreateOrConnectWithoutScholarshipInput[]
    upsert?: MatchUpsertWithWhereUniqueWithoutScholarshipInput | MatchUpsertWithWhereUniqueWithoutScholarshipInput[]
    createMany?: MatchCreateManyScholarshipInputEnvelope
    set?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    disconnect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    delete?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    connect?: MatchWhereUniqueInput | MatchWhereUniqueInput[]
    update?: MatchUpdateWithWhereUniqueWithoutScholarshipInput | MatchUpdateWithWhereUniqueWithoutScholarshipInput[]
    updateMany?: MatchUpdateManyWithWhereWithoutScholarshipInput | MatchUpdateManyWithWhereWithoutScholarshipInput[]
    deleteMany?: MatchScalarWhereInput | MatchScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutScholarshipNestedInput = {
    create?: XOR<ApplicationCreateWithoutScholarshipInput, ApplicationUncheckedCreateWithoutScholarshipInput> | ApplicationCreateWithoutScholarshipInput[] | ApplicationUncheckedCreateWithoutScholarshipInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutScholarshipInput | ApplicationCreateOrConnectWithoutScholarshipInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutScholarshipInput | ApplicationUpsertWithWhereUniqueWithoutScholarshipInput[]
    createMany?: ApplicationCreateManyScholarshipInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutScholarshipInput | ApplicationUpdateWithWhereUniqueWithoutScholarshipInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutScholarshipInput | ApplicationUpdateManyWithWhereWithoutScholarshipInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type StudentProfileCreateNestedOneWithoutMatchesInput = {
    create?: XOR<StudentProfileCreateWithoutMatchesInput, StudentProfileUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutMatchesInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type ScholarshipCreateNestedOneWithoutMatchesInput = {
    create?: XOR<ScholarshipCreateWithoutMatchesInput, ScholarshipUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: ScholarshipCreateOrConnectWithoutMatchesInput
    connect?: ScholarshipWhereUniqueInput
  }

  export type StudentProfileUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<StudentProfileCreateWithoutMatchesInput, StudentProfileUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutMatchesInput
    upsert?: StudentProfileUpsertWithoutMatchesInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutMatchesInput, StudentProfileUpdateWithoutMatchesInput>, StudentProfileUncheckedUpdateWithoutMatchesInput>
  }

  export type ScholarshipUpdateOneRequiredWithoutMatchesNestedInput = {
    create?: XOR<ScholarshipCreateWithoutMatchesInput, ScholarshipUncheckedCreateWithoutMatchesInput>
    connectOrCreate?: ScholarshipCreateOrConnectWithoutMatchesInput
    upsert?: ScholarshipUpsertWithoutMatchesInput
    connect?: ScholarshipWhereUniqueInput
    update?: XOR<XOR<ScholarshipUpdateToOneWithWhereWithoutMatchesInput, ScholarshipUpdateWithoutMatchesInput>, ScholarshipUncheckedUpdateWithoutMatchesInput>
  }

  export type StudentProfileCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<StudentProfileCreateWithoutApplicationsInput, StudentProfileUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutApplicationsInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type ScholarshipCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<ScholarshipCreateWithoutApplicationsInput, ScholarshipUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ScholarshipCreateOrConnectWithoutApplicationsInput
    connect?: ScholarshipWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StudentProfileUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<StudentProfileCreateWithoutApplicationsInput, StudentProfileUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutApplicationsInput
    upsert?: StudentProfileUpsertWithoutApplicationsInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutApplicationsInput, StudentProfileUpdateWithoutApplicationsInput>, StudentProfileUncheckedUpdateWithoutApplicationsInput>
  }

  export type ScholarshipUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<ScholarshipCreateWithoutApplicationsInput, ScholarshipUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: ScholarshipCreateOrConnectWithoutApplicationsInput
    upsert?: ScholarshipUpsertWithoutApplicationsInput
    connect?: ScholarshipWhereUniqueInput
    update?: XOR<XOR<ScholarshipUpdateToOneWithWhereWithoutApplicationsInput, ScholarshipUpdateWithoutApplicationsInput>, ScholarshipUncheckedUpdateWithoutApplicationsInput>
  }

  export type StudentProfileCreateNestedOneWithoutEssayRequestsInput = {
    create?: XOR<StudentProfileCreateWithoutEssayRequestsInput, StudentProfileUncheckedCreateWithoutEssayRequestsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutEssayRequestsInput
    connect?: StudentProfileWhereUniqueInput
  }

  export type StudentProfileUpdateOneRequiredWithoutEssayRequestsNestedInput = {
    create?: XOR<StudentProfileCreateWithoutEssayRequestsInput, StudentProfileUncheckedCreateWithoutEssayRequestsInput>
    connectOrCreate?: StudentProfileCreateOrConnectWithoutEssayRequestsInput
    upsert?: StudentProfileUpsertWithoutEssayRequestsInput
    connect?: StudentProfileWhereUniqueInput
    update?: XOR<XOR<StudentProfileUpdateToOneWithWhereWithoutEssayRequestsInput, StudentProfileUpdateWithoutEssayRequestsInput>, StudentProfileUncheckedUpdateWithoutEssayRequestsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StudentProfileCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    gpa: number
    majorInterest: string
    state: string
    country: string
    gender?: string | null
    ethnicity?: string | null
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: StudentProfileCreateactivitiesInput | string[]
    createdAt?: Date | string
    matches?: MatchCreateNestedManyWithoutStudentInput
    applications?: ApplicationCreateNestedManyWithoutStudentInput
    essayRequests?: EssayRequestCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutUserInput = {
    id?: string
    firstName: string
    lastName: string
    gpa: number
    majorInterest: string
    state: string
    country: string
    gender?: string | null
    ethnicity?: string | null
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: StudentProfileCreateactivitiesInput | string[]
    createdAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutStudentInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
    essayRequests?: EssayRequestUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutUserInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
  }

  export type StudentProfileUpsertWithoutUserInput = {
    update: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
    create: XOR<StudentProfileCreateWithoutUserInput, StudentProfileUncheckedCreateWithoutUserInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutUserInput, StudentProfileUncheckedUpdateWithoutUserInput>
  }

  export type StudentProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    majorInterest?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeed?: BoolFieldUpdateOperationsInput | boolean
    firstGeneration?: BoolFieldUpdateOperationsInput | boolean
    activities?: StudentProfileUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUpdateManyWithoutStudentNestedInput
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
    essayRequests?: EssayRequestUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    majorInterest?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeed?: BoolFieldUpdateOperationsInput | boolean
    firstGeneration?: BoolFieldUpdateOperationsInput | boolean
    activities?: StudentProfileUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutStudentNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
    essayRequests?: EssayRequestUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateWithoutStudentProfileInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutStudentProfileInput = {
    id?: string
    email: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutStudentProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
  }

  export type MatchCreateWithoutStudentInput = {
    id?: string
    matchScore: number
    winProbability: number
    saved?: boolean
    applied?: boolean
    createdAt?: Date | string
    scholarship: ScholarshipCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutStudentInput = {
    id?: string
    scholarshipId: string
    matchScore: number
    winProbability: number
    saved?: boolean
    applied?: boolean
    createdAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutStudentInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutStudentInput, MatchUncheckedCreateWithoutStudentInput>
  }

  export type MatchCreateManyStudentInputEnvelope = {
    data: MatchCreateManyStudentInput | MatchCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutStudentInput = {
    id?: string
    status: string
    submittedAt?: Date | string | null
    notes?: string | null
    scholarship: ScholarshipCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutStudentInput = {
    id?: string
    scholarshipId: string
    status: string
    submittedAt?: Date | string | null
    notes?: string | null
  }

  export type ApplicationCreateOrConnectWithoutStudentInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput>
  }

  export type ApplicationCreateManyStudentInputEnvelope = {
    data: ApplicationCreateManyStudentInput | ApplicationCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type EssayRequestCreateWithoutStudentInput = {
    id?: string
    prompt: string
    essayText: string
    aiFeedback: string
    createdAt?: Date | string
  }

  export type EssayRequestUncheckedCreateWithoutStudentInput = {
    id?: string
    prompt: string
    essayText: string
    aiFeedback: string
    createdAt?: Date | string
  }

  export type EssayRequestCreateOrConnectWithoutStudentInput = {
    where: EssayRequestWhereUniqueInput
    create: XOR<EssayRequestCreateWithoutStudentInput, EssayRequestUncheckedCreateWithoutStudentInput>
  }

  export type EssayRequestCreateManyStudentInputEnvelope = {
    data: EssayRequestCreateManyStudentInput | EssayRequestCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutStudentProfileInput = {
    update: XOR<UserUpdateWithoutStudentProfileInput, UserUncheckedUpdateWithoutStudentProfileInput>
    create: XOR<UserCreateWithoutStudentProfileInput, UserUncheckedCreateWithoutStudentProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudentProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudentProfileInput, UserUncheckedUpdateWithoutStudentProfileInput>
  }

  export type UserUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutStudentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUpsertWithWhereUniqueWithoutStudentInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutStudentInput, MatchUncheckedUpdateWithoutStudentInput>
    create: XOR<MatchCreateWithoutStudentInput, MatchUncheckedCreateWithoutStudentInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutStudentInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutStudentInput, MatchUncheckedUpdateWithoutStudentInput>
  }

  export type MatchUpdateManyWithWhereWithoutStudentInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutStudentInput>
  }

  export type MatchScalarWhereInput = {
    AND?: MatchScalarWhereInput | MatchScalarWhereInput[]
    OR?: MatchScalarWhereInput[]
    NOT?: MatchScalarWhereInput | MatchScalarWhereInput[]
    id?: UuidFilter<"Match"> | string
    studentId?: UuidFilter<"Match"> | string
    scholarshipId?: UuidFilter<"Match"> | string
    matchScore?: IntFilter<"Match"> | number
    winProbability?: FloatFilter<"Match"> | number
    saved?: BoolFilter<"Match"> | boolean
    applied?: BoolFilter<"Match"> | boolean
    createdAt?: DateTimeFilter<"Match"> | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutStudentInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutStudentInput, ApplicationUncheckedUpdateWithoutStudentInput>
    create: XOR<ApplicationCreateWithoutStudentInput, ApplicationUncheckedCreateWithoutStudentInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutStudentInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutStudentInput, ApplicationUncheckedUpdateWithoutStudentInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutStudentInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutStudentInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: UuidFilter<"Application"> | string
    studentId?: UuidFilter<"Application"> | string
    scholarshipId?: UuidFilter<"Application"> | string
    status?: StringFilter<"Application"> | string
    submittedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
    notes?: StringNullableFilter<"Application"> | string | null
  }

  export type EssayRequestUpsertWithWhereUniqueWithoutStudentInput = {
    where: EssayRequestWhereUniqueInput
    update: XOR<EssayRequestUpdateWithoutStudentInput, EssayRequestUncheckedUpdateWithoutStudentInput>
    create: XOR<EssayRequestCreateWithoutStudentInput, EssayRequestUncheckedCreateWithoutStudentInput>
  }

  export type EssayRequestUpdateWithWhereUniqueWithoutStudentInput = {
    where: EssayRequestWhereUniqueInput
    data: XOR<EssayRequestUpdateWithoutStudentInput, EssayRequestUncheckedUpdateWithoutStudentInput>
  }

  export type EssayRequestUpdateManyWithWhereWithoutStudentInput = {
    where: EssayRequestScalarWhereInput
    data: XOR<EssayRequestUpdateManyMutationInput, EssayRequestUncheckedUpdateManyWithoutStudentInput>
  }

  export type EssayRequestScalarWhereInput = {
    AND?: EssayRequestScalarWhereInput | EssayRequestScalarWhereInput[]
    OR?: EssayRequestScalarWhereInput[]
    NOT?: EssayRequestScalarWhereInput | EssayRequestScalarWhereInput[]
    id?: UuidFilter<"EssayRequest"> | string
    studentId?: UuidFilter<"EssayRequest"> | string
    prompt?: StringFilter<"EssayRequest"> | string
    essayText?: StringFilter<"EssayRequest"> | string
    aiFeedback?: StringFilter<"EssayRequest"> | string
    createdAt?: DateTimeFilter<"EssayRequest"> | Date | string
  }

  export type MatchCreateWithoutScholarshipInput = {
    id?: string
    matchScore: number
    winProbability: number
    saved?: boolean
    applied?: boolean
    createdAt?: Date | string
    student: StudentProfileCreateNestedOneWithoutMatchesInput
  }

  export type MatchUncheckedCreateWithoutScholarshipInput = {
    id?: string
    studentId: string
    matchScore: number
    winProbability: number
    saved?: boolean
    applied?: boolean
    createdAt?: Date | string
  }

  export type MatchCreateOrConnectWithoutScholarshipInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutScholarshipInput, MatchUncheckedCreateWithoutScholarshipInput>
  }

  export type MatchCreateManyScholarshipInputEnvelope = {
    data: MatchCreateManyScholarshipInput | MatchCreateManyScholarshipInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutScholarshipInput = {
    id?: string
    status: string
    submittedAt?: Date | string | null
    notes?: string | null
    student: StudentProfileCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutScholarshipInput = {
    id?: string
    studentId: string
    status: string
    submittedAt?: Date | string | null
    notes?: string | null
  }

  export type ApplicationCreateOrConnectWithoutScholarshipInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutScholarshipInput, ApplicationUncheckedCreateWithoutScholarshipInput>
  }

  export type ApplicationCreateManyScholarshipInputEnvelope = {
    data: ApplicationCreateManyScholarshipInput | ApplicationCreateManyScholarshipInput[]
    skipDuplicates?: boolean
  }

  export type MatchUpsertWithWhereUniqueWithoutScholarshipInput = {
    where: MatchWhereUniqueInput
    update: XOR<MatchUpdateWithoutScholarshipInput, MatchUncheckedUpdateWithoutScholarshipInput>
    create: XOR<MatchCreateWithoutScholarshipInput, MatchUncheckedCreateWithoutScholarshipInput>
  }

  export type MatchUpdateWithWhereUniqueWithoutScholarshipInput = {
    where: MatchWhereUniqueInput
    data: XOR<MatchUpdateWithoutScholarshipInput, MatchUncheckedUpdateWithoutScholarshipInput>
  }

  export type MatchUpdateManyWithWhereWithoutScholarshipInput = {
    where: MatchScalarWhereInput
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyWithoutScholarshipInput>
  }

  export type ApplicationUpsertWithWhereUniqueWithoutScholarshipInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutScholarshipInput, ApplicationUncheckedUpdateWithoutScholarshipInput>
    create: XOR<ApplicationCreateWithoutScholarshipInput, ApplicationUncheckedCreateWithoutScholarshipInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutScholarshipInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutScholarshipInput, ApplicationUncheckedUpdateWithoutScholarshipInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutScholarshipInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutScholarshipInput>
  }

  export type StudentProfileCreateWithoutMatchesInput = {
    id?: string
    firstName: string
    lastName: string
    gpa: number
    majorInterest: string
    state: string
    country: string
    gender?: string | null
    ethnicity?: string | null
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: StudentProfileCreateactivitiesInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStudentProfileInput
    applications?: ApplicationCreateNestedManyWithoutStudentInput
    essayRequests?: EssayRequestCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutMatchesInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    gpa: number
    majorInterest: string
    state: string
    country: string
    gender?: string | null
    ethnicity?: string | null
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: StudentProfileCreateactivitiesInput | string[]
    createdAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
    essayRequests?: EssayRequestUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutMatchesInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutMatchesInput, StudentProfileUncheckedCreateWithoutMatchesInput>
  }

  export type ScholarshipCreateWithoutMatchesInput = {
    id?: string
    title: string
    organization: string
    amount: number
    description: string
    deadline: Date | string
    gpaMin?: number | null
    majorRequired?: string | null
    stateRequired?: string | null
    countryRequired?: string | null
    genderRequired?: string | null
    ethnicityRequired?: string | null
    financialNeedRequired?: boolean
    essayRequired?: boolean
    estimatedApplicants?: number
    numberOfWinners?: number
    applicationUrl: string
    createdAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipUncheckedCreateWithoutMatchesInput = {
    id?: string
    title: string
    organization: string
    amount: number
    description: string
    deadline: Date | string
    gpaMin?: number | null
    majorRequired?: string | null
    stateRequired?: string | null
    countryRequired?: string | null
    genderRequired?: string | null
    ethnicityRequired?: string | null
    financialNeedRequired?: boolean
    essayRequired?: boolean
    estimatedApplicants?: number
    numberOfWinners?: number
    applicationUrl: string
    createdAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipCreateOrConnectWithoutMatchesInput = {
    where: ScholarshipWhereUniqueInput
    create: XOR<ScholarshipCreateWithoutMatchesInput, ScholarshipUncheckedCreateWithoutMatchesInput>
  }

  export type StudentProfileUpsertWithoutMatchesInput = {
    update: XOR<StudentProfileUpdateWithoutMatchesInput, StudentProfileUncheckedUpdateWithoutMatchesInput>
    create: XOR<StudentProfileCreateWithoutMatchesInput, StudentProfileUncheckedCreateWithoutMatchesInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutMatchesInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutMatchesInput, StudentProfileUncheckedUpdateWithoutMatchesInput>
  }

  export type StudentProfileUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    majorInterest?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeed?: BoolFieldUpdateOperationsInput | boolean
    firstGeneration?: BoolFieldUpdateOperationsInput | boolean
    activities?: StudentProfileUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
    essayRequests?: EssayRequestUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    majorInterest?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeed?: BoolFieldUpdateOperationsInput | boolean
    firstGeneration?: BoolFieldUpdateOperationsInput | boolean
    activities?: StudentProfileUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
    essayRequests?: EssayRequestUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ScholarshipUpsertWithoutMatchesInput = {
    update: XOR<ScholarshipUpdateWithoutMatchesInput, ScholarshipUncheckedUpdateWithoutMatchesInput>
    create: XOR<ScholarshipCreateWithoutMatchesInput, ScholarshipUncheckedCreateWithoutMatchesInput>
    where?: ScholarshipWhereInput
  }

  export type ScholarshipUpdateToOneWithWhereWithoutMatchesInput = {
    where?: ScholarshipWhereInput
    data: XOR<ScholarshipUpdateWithoutMatchesInput, ScholarshipUncheckedUpdateWithoutMatchesInput>
  }

  export type ScholarshipUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    gpaMin?: NullableFloatFieldUpdateOperationsInput | number | null
    majorRequired?: NullableStringFieldUpdateOperationsInput | string | null
    stateRequired?: NullableStringFieldUpdateOperationsInput | string | null
    countryRequired?: NullableStringFieldUpdateOperationsInput | string | null
    genderRequired?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicityRequired?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeedRequired?: BoolFieldUpdateOperationsInput | boolean
    essayRequired?: BoolFieldUpdateOperationsInput | boolean
    estimatedApplicants?: IntFieldUpdateOperationsInput | number
    numberOfWinners?: IntFieldUpdateOperationsInput | number
    applicationUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutScholarshipNestedInput
  }

  export type ScholarshipUncheckedUpdateWithoutMatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    gpaMin?: NullableFloatFieldUpdateOperationsInput | number | null
    majorRequired?: NullableStringFieldUpdateOperationsInput | string | null
    stateRequired?: NullableStringFieldUpdateOperationsInput | string | null
    countryRequired?: NullableStringFieldUpdateOperationsInput | string | null
    genderRequired?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicityRequired?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeedRequired?: BoolFieldUpdateOperationsInput | boolean
    essayRequired?: BoolFieldUpdateOperationsInput | boolean
    estimatedApplicants?: IntFieldUpdateOperationsInput | number
    numberOfWinners?: IntFieldUpdateOperationsInput | number
    applicationUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutScholarshipNestedInput
  }

  export type StudentProfileCreateWithoutApplicationsInput = {
    id?: string
    firstName: string
    lastName: string
    gpa: number
    majorInterest: string
    state: string
    country: string
    gender?: string | null
    ethnicity?: string | null
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: StudentProfileCreateactivitiesInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStudentProfileInput
    matches?: MatchCreateNestedManyWithoutStudentInput
    essayRequests?: EssayRequestCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutApplicationsInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    gpa: number
    majorInterest: string
    state: string
    country: string
    gender?: string | null
    ethnicity?: string | null
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: StudentProfileCreateactivitiesInput | string[]
    createdAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutStudentInput
    essayRequests?: EssayRequestUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutApplicationsInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutApplicationsInput, StudentProfileUncheckedCreateWithoutApplicationsInput>
  }

  export type ScholarshipCreateWithoutApplicationsInput = {
    id?: string
    title: string
    organization: string
    amount: number
    description: string
    deadline: Date | string
    gpaMin?: number | null
    majorRequired?: string | null
    stateRequired?: string | null
    countryRequired?: string | null
    genderRequired?: string | null
    ethnicityRequired?: string | null
    financialNeedRequired?: boolean
    essayRequired?: boolean
    estimatedApplicants?: number
    numberOfWinners?: number
    applicationUrl: string
    createdAt?: Date | string
    matches?: MatchCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipUncheckedCreateWithoutApplicationsInput = {
    id?: string
    title: string
    organization: string
    amount: number
    description: string
    deadline: Date | string
    gpaMin?: number | null
    majorRequired?: string | null
    stateRequired?: string | null
    countryRequired?: string | null
    genderRequired?: string | null
    ethnicityRequired?: string | null
    financialNeedRequired?: boolean
    essayRequired?: boolean
    estimatedApplicants?: number
    numberOfWinners?: number
    applicationUrl: string
    createdAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutScholarshipInput
  }

  export type ScholarshipCreateOrConnectWithoutApplicationsInput = {
    where: ScholarshipWhereUniqueInput
    create: XOR<ScholarshipCreateWithoutApplicationsInput, ScholarshipUncheckedCreateWithoutApplicationsInput>
  }

  export type StudentProfileUpsertWithoutApplicationsInput = {
    update: XOR<StudentProfileUpdateWithoutApplicationsInput, StudentProfileUncheckedUpdateWithoutApplicationsInput>
    create: XOR<StudentProfileCreateWithoutApplicationsInput, StudentProfileUncheckedCreateWithoutApplicationsInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutApplicationsInput, StudentProfileUncheckedUpdateWithoutApplicationsInput>
  }

  export type StudentProfileUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    majorInterest?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeed?: BoolFieldUpdateOperationsInput | boolean
    firstGeneration?: BoolFieldUpdateOperationsInput | boolean
    activities?: StudentProfileUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    matches?: MatchUpdateManyWithoutStudentNestedInput
    essayRequests?: EssayRequestUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    majorInterest?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeed?: BoolFieldUpdateOperationsInput | boolean
    firstGeneration?: BoolFieldUpdateOperationsInput | boolean
    activities?: StudentProfileUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutStudentNestedInput
    essayRequests?: EssayRequestUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ScholarshipUpsertWithoutApplicationsInput = {
    update: XOR<ScholarshipUpdateWithoutApplicationsInput, ScholarshipUncheckedUpdateWithoutApplicationsInput>
    create: XOR<ScholarshipCreateWithoutApplicationsInput, ScholarshipUncheckedCreateWithoutApplicationsInput>
    where?: ScholarshipWhereInput
  }

  export type ScholarshipUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: ScholarshipWhereInput
    data: XOR<ScholarshipUpdateWithoutApplicationsInput, ScholarshipUncheckedUpdateWithoutApplicationsInput>
  }

  export type ScholarshipUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    gpaMin?: NullableFloatFieldUpdateOperationsInput | number | null
    majorRequired?: NullableStringFieldUpdateOperationsInput | string | null
    stateRequired?: NullableStringFieldUpdateOperationsInput | string | null
    countryRequired?: NullableStringFieldUpdateOperationsInput | string | null
    genderRequired?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicityRequired?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeedRequired?: BoolFieldUpdateOperationsInput | boolean
    essayRequired?: BoolFieldUpdateOperationsInput | boolean
    estimatedApplicants?: IntFieldUpdateOperationsInput | number
    numberOfWinners?: IntFieldUpdateOperationsInput | number
    applicationUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUpdateManyWithoutScholarshipNestedInput
  }

  export type ScholarshipUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    organization?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    gpaMin?: NullableFloatFieldUpdateOperationsInput | number | null
    majorRequired?: NullableStringFieldUpdateOperationsInput | string | null
    stateRequired?: NullableStringFieldUpdateOperationsInput | string | null
    countryRequired?: NullableStringFieldUpdateOperationsInput | string | null
    genderRequired?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicityRequired?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeedRequired?: BoolFieldUpdateOperationsInput | boolean
    essayRequired?: BoolFieldUpdateOperationsInput | boolean
    estimatedApplicants?: IntFieldUpdateOperationsInput | number
    numberOfWinners?: IntFieldUpdateOperationsInput | number
    applicationUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutScholarshipNestedInput
  }

  export type StudentProfileCreateWithoutEssayRequestsInput = {
    id?: string
    firstName: string
    lastName: string
    gpa: number
    majorInterest: string
    state: string
    country: string
    gender?: string | null
    ethnicity?: string | null
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: StudentProfileCreateactivitiesInput | string[]
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutStudentProfileInput
    matches?: MatchCreateNestedManyWithoutStudentInput
    applications?: ApplicationCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileUncheckedCreateWithoutEssayRequestsInput = {
    id?: string
    userId: string
    firstName: string
    lastName: string
    gpa: number
    majorInterest: string
    state: string
    country: string
    gender?: string | null
    ethnicity?: string | null
    financialNeed?: boolean
    firstGeneration?: boolean
    activities?: StudentProfileCreateactivitiesInput | string[]
    createdAt?: Date | string
    matches?: MatchUncheckedCreateNestedManyWithoutStudentInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentProfileCreateOrConnectWithoutEssayRequestsInput = {
    where: StudentProfileWhereUniqueInput
    create: XOR<StudentProfileCreateWithoutEssayRequestsInput, StudentProfileUncheckedCreateWithoutEssayRequestsInput>
  }

  export type StudentProfileUpsertWithoutEssayRequestsInput = {
    update: XOR<StudentProfileUpdateWithoutEssayRequestsInput, StudentProfileUncheckedUpdateWithoutEssayRequestsInput>
    create: XOR<StudentProfileCreateWithoutEssayRequestsInput, StudentProfileUncheckedCreateWithoutEssayRequestsInput>
    where?: StudentProfileWhereInput
  }

  export type StudentProfileUpdateToOneWithWhereWithoutEssayRequestsInput = {
    where?: StudentProfileWhereInput
    data: XOR<StudentProfileUpdateWithoutEssayRequestsInput, StudentProfileUncheckedUpdateWithoutEssayRequestsInput>
  }

  export type StudentProfileUpdateWithoutEssayRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    majorInterest?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeed?: BoolFieldUpdateOperationsInput | boolean
    firstGeneration?: BoolFieldUpdateOperationsInput | boolean
    activities?: StudentProfileUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStudentProfileNestedInput
    matches?: MatchUpdateManyWithoutStudentNestedInput
    applications?: ApplicationUpdateManyWithoutStudentNestedInput
  }

  export type StudentProfileUncheckedUpdateWithoutEssayRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    gpa?: FloatFieldUpdateOperationsInput | number
    majorInterest?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    ethnicity?: NullableStringFieldUpdateOperationsInput | string | null
    financialNeed?: BoolFieldUpdateOperationsInput | boolean
    firstGeneration?: BoolFieldUpdateOperationsInput | boolean
    activities?: StudentProfileUpdateactivitiesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matches?: MatchUncheckedUpdateManyWithoutStudentNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type MatchCreateManyStudentInput = {
    id?: string
    scholarshipId: string
    matchScore: number
    winProbability: number
    saved?: boolean
    applied?: boolean
    createdAt?: Date | string
  }

  export type ApplicationCreateManyStudentInput = {
    id?: string
    scholarshipId: string
    status: string
    submittedAt?: Date | string | null
    notes?: string | null
  }

  export type EssayRequestCreateManyStudentInput = {
    id?: string
    prompt: string
    essayText: string
    aiFeedback: string
    createdAt?: Date | string
  }

  export type MatchUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    winProbability?: FloatFieldUpdateOperationsInput | number
    saved?: BoolFieldUpdateOperationsInput | boolean
    applied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    scholarship?: ScholarshipUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scholarshipId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    winProbability?: FloatFieldUpdateOperationsInput | number
    saved?: BoolFieldUpdateOperationsInput | boolean
    applied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scholarshipId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    winProbability?: FloatFieldUpdateOperationsInput | number
    saved?: BoolFieldUpdateOperationsInput | boolean
    applied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    scholarship?: ScholarshipUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scholarshipId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scholarshipId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EssayRequestUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    essayText?: StringFieldUpdateOperationsInput | string
    aiFeedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EssayRequestUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    essayText?: StringFieldUpdateOperationsInput | string
    aiFeedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EssayRequestUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    essayText?: StringFieldUpdateOperationsInput | string
    aiFeedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchCreateManyScholarshipInput = {
    id?: string
    studentId: string
    matchScore: number
    winProbability: number
    saved?: boolean
    applied?: boolean
    createdAt?: Date | string
  }

  export type ApplicationCreateManyScholarshipInput = {
    id?: string
    studentId: string
    status: string
    submittedAt?: Date | string | null
    notes?: string | null
  }

  export type MatchUpdateWithoutScholarshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    winProbability?: FloatFieldUpdateOperationsInput | number
    saved?: BoolFieldUpdateOperationsInput | boolean
    applied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentProfileUpdateOneRequiredWithoutMatchesNestedInput
  }

  export type MatchUncheckedUpdateWithoutScholarshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    winProbability?: FloatFieldUpdateOperationsInput | number
    saved?: BoolFieldUpdateOperationsInput | boolean
    applied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MatchUncheckedUpdateManyWithoutScholarshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    matchScore?: IntFieldUpdateOperationsInput | number
    winProbability?: FloatFieldUpdateOperationsInput | number
    saved?: BoolFieldUpdateOperationsInput | boolean
    applied?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutScholarshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    student?: StudentProfileUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutScholarshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ApplicationUncheckedUpdateManyWithoutScholarshipInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    submittedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}