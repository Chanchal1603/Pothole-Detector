SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[PotHoles](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Lattitude] [nvarchar](50) NOT NULL,
	[Longitude] [nvarchar](50) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[CreatedTime] [datetime] NOT NULL,
	[Probability] [decimal](18, 0) NULL,
	[image] [varbinary](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


